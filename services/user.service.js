"use strict"

const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");
const argon2 = require("argon2");
const Str = require("@supercharge/strings");
const { ServiceNotFoundError } = require("moleculer").Errors;
const jwt = require('jsonwebtoken');
const secrets = require("../secret/secrets");

module.exports = {
    name: "user",
    mixins: [DbService],
    adapter: new MongooseAdapter("mongodb://localhost/shop"),

    //indexes are created when collection is created
    //changing index option whithout removing collection in db will bear no results
    model: mongoose.model("User", mongoose.Schema({
        login: {type: String, unique: true},
        email: {type: String, unique: true},
        verified: {type: Boolean, default: false},
        link: {
            address: {type: String, unique: true},
            crtDate: {type: Date, expires: 3600*24, default: Date.now},
        },
        password: "string",
    }, {
        timestamps: true,
    })),

    dependencies: [
        "mail"
    ],

    actions: {
        list: false,
        create: false,
        get: false,
        update: false,
        remove: false,

        register: {
            rest: "POST register",
            params: {
                login: "string|lowercase|max:32",
                email: "email|normalize|max:64",
                password: "string|min:8|max:64",
            },
            async handler(ctx){
                try {
                    //check if login or email already exist
                    const l = await this.adapter.count({query: {login: ctx.params.login}});
                    if(l >= 1)
                    {
                        return {
                            action: "register",
                            success: false,
                            message: "login exist",
                        };
                    }
                    const e = await this.adapter.count({query: {email: ctx.params.email}});
                    if(e >= 1)
                    {
                        return {
                            action: "register",
                            success: false,
                            message: "email exist",
                        };
                    }
                    
                    const hash = await argon2.hash(ctx.params.password);
                    const link = Str.random(64);
                    //insert user
                    this.adapter.insert({
                        login: ctx.params.login,
                        email: ctx.params.email,
                        link: {
                            address: link,
                        },
                        password: hash,
                    });

                    try{
                        //send authentification mail
                        let mail = await this.sendMail(ctx.params.email, link);
                        this.broker.logger.info( mail );
                    } catch(err) {
                        this.broker.logger.error( err );
                        return {
                            action: "register",
                            success: false,
                            message: "internal error",
                        };
                    }
                } catch( err ) {
                    this.broker.logger.error( err );
                    return {
                        action: "register",
                        success: false,
                        message: "internal error",
                    };
                }
                return {action: "register", success: true, message: ""};
            }
        },

        verify: {
            rest: "GET verify/:link",
            params: {
                link: "string",
            },
            async handler(ctx) {
                try {
                    const account = await this.adapter.find({
                        query: {"link.address": ctx.params.link}
                    });
                    if(account.length === 0)
                    {
                        return {
                            action: "verify",
                            success: false,
                            message: "link not exist"
                        };
                    }
                    await this.adapter.updateById(account[0]._id, {
                        verified: true,
                        $unset: {link: ""},
                    });
                    return {
                        action: "verify",
                        success: true,
                        message: ""
                    }
                } catch( error )
                {
                    this.broker.logger.error( err );
                    return {
                        action: "verify",
                        success: false,
                        message: "internal error",
                    }
                }
            }
        },

        login: {
            rest: "POST login",
            params: {
                login: "string|lowercase|max:32",
                password: "string|max:64",
            },
            async handler(ctx) {
                const password = ctx.params.password;
                const login = ctx.params.login;
                const user = await this.adapter.find({
                    query: {"login": login}
                });
                if(user.length === 0)
                {
                    return {
                        action: "login",
                        success: false,
                        message: "wrong login"
                    };
                }
                try {
                    if (!await argon2.verify(user[0].password, password)) {
                        return {
                            action: "login",
                            success: false,
                            message: "wrong password"
                        };
                    }
                } catch (err) {
                    this.broker.logger.error( err );
                    return {
                        action: "login",
                        success: false,
                        message: "internal error"
                    };
                }
                let token = jwt.sign({sub: login}, secrets.tokenSecret, {expiresIn: '1h'});
                return {
                    action: "login",
                    success: true,
                    message: token
                };
            }
        },

        authorize: {
            visibility: "public", //check protected
            async handler(ctx) {
                let name = ctx.meta.user?.name;
                this.broker.logger.info("name: " + name);
                try {
                    const l = await this.adapter.count({query: {login: name}});
                    if(l >= 1)
                    {
                        return true;
                    }
                    return false;
                } catch( error ) {
                    this.broker.logger.error(error);
                    ctx.meta.verify = false;
                    return false;
                }
            }
        },

        //basicly auth here is for test purposes
        name: {
            rest: "GET name",
            auth: "required",
            async handler(ctx) {
                return ctx.meta.user.name;
            }
        },
    },

    methods: {
        async sendMail(address, link) {
            return this.broker.call("mail.send", {
                to: address, 
                subject: "Weryfikacja", 
                html: `<a href="https://localhost:3000/weryfikuj/${link}">Aktywuj!</a>`,
            });
        },
    }
    
}