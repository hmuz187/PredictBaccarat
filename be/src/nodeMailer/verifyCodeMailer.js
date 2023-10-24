'use strict'
const nodemailer  = require('nodemailer')
const { google } = require('googleapis')
require('dotenv').config();

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN
const ADMIN_EMAIL = process.env.ADMIN_EMAIL

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const sendMail = async ({userEmail, code, roleMessage}) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        var transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: ADMIN_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            }
        })

        var adminEmail = ADMIN_EMAIL

        let info = await transport.sendMail({
            from: `"Predict Baccarat BrilliantGroup " <${adminEmail}>`,  
            to: `${userEmail}`,
            subject: `${roleMessage} verify Code`,
            html: `<h2>Thank you very much</h2><h3>Here is the code: ${code}</h3>`,
        });

        // console.log(userEmail)
        // console.log(info)
        return ({status: 'ok', messageId: info.messageId})

    }
    catch (error) {
        // console.error(error);
        return ({status: 'error', messageId: null})
    }
}

module.exports = {
    sendMail,
}





















