"use strict"

const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");
const argon2 = require("argon2");
const Str = require("@supercharge/strings");
const { ServiceNotFoundError } = require("moleculer").Errors;

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
            crtDate: {type: Date, expires: 60, default: Date.now},
        },
        password: "string",
    }, {
        timestamps: true,
    })),

    actions: {
        register: {
            rest: "POST register",
            params: {
                login: "string|lowercase|max:32",
                email: "email|normalize|max:64",
                password: "string|min:8|max:64",
                $$strict: true,
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
                    
                    //register user
                    const hash = await argon2.hash(ctx.params.password);
                    const link = Str.random(64);
                    this.adapter.insert({
                        login: ctx.params.login,
                        email: ctx.params.email,
                        link: {
                            address: link,
                        },
                        password: hash,
                    });

                    //send authentification mail
                    try{
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
                $$strict: true,
            },
            async handler(ctx) {
                const account = await this.adapter.find({
                    query: {"link.address": ctx.params.link}
                });
                if(account.length === 0)
                {
                    throw new ServiceNotFoundError();
                }
                const response = await this.adapter.updateById(account[0]._id, {
                    verified: true,
                    $unset: {link: ""},
                });
                return response;
            }
        }
    },

    methods: {
        async sendMail(address, link) {
            return this.broker.call("mail.send", {
                to: address, 
                subject: "Weryfikacja", 
                html: `<a href="https://localhost:3000/api/user/verify/${link}">Aktywuj!</a>`,
            });
        },
    }
    
}