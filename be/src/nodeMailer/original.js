'use strict'
const nodemailer  = require('nodemailer')
const { google } = require('googleapis')
require('dotenv').config();
const crypto = require('node:crypto');

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const sendMail = async ({email, code}) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        var transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "alex.nodejs0209@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            }
        })

        var adminEmail = 'alex.nodejs0209@gmail.com'

        let info = await transport.sendMail({
            from: `"Alex Do " <${adminEmail}>`,  
            to: `${email}`,
            subject: 'Sign Up verify Code',
            html: `<h1>Thank you very much</h1><h2>Here is the code: ${code}</h2>`,
        });

        //console.log(info.response);


    }
    catch (error) {
        console.error(error);
    }
}

sendMail({email:'alex.spencer0209@gmail.com', code:'00123bhg'});






















