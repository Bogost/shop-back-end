"use strict";

const Mailer = require("moleculer-mail");
const secrets = require("../secret/secrets");

module.exports = {
	name: "mail",
	mixins: [Mailer],

	settings: {
		$secureSettings: ["transport.auth"],
		// Sender default e-mail address
		from: secrets.sender,
		
		transport: {
			service: "gmail",
			auth: {
				type: "OAuth2",
				user: secrets.oauthUser,
				clientId: secrets.clientId,
				clientSecret: secrets.clientSecret,
				refreshToken: secrets.refreshToken,
			}
		}
	},
};