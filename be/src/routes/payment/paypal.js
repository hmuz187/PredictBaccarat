const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config()

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
const baseURL = {
    sandbox: "https://api-m.sandbox.paypal.com",
    production: "https://api-m.paypal.com"
};




router.post("/paypal/create-paypal-order", async (req, res) => {
    const order = await createOrder();
    res.json(order);
});

router.post("/paypal/capture-paypal-order", async (req, res) => {
    const { orderID } = req.body;
    const captureData = await capturePayment(orderID);
    // TODO: store payment information such as the transaction ID
    res.json(captureData);
});


//////////////////////
// PayPal API helpers
//////////////////////

// use the orders api to create an order
async function createOrder() {
    console.log(`create order`)
    const accessToken = await generateAccessToken();
    const url = `${baseURL.sandbox}/v2/checkout/orders`;
    const response = await axios({
        url,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "100.00",
                    },
                },
            ],
        }),
    });
    const data = await response.json();
    console.log(data)
    return data;
}


// use the orders api to capture payment for an order
async function capturePayment(orderId) {
    console.log(orderId)
    const accessToken = await generateAccessToken();
    const url = `${baseURL.sandbox}/v2/checkout/orders/${orderId}/capture`;
    const response = await axios({
        url,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
    const data = await response.json();
    return data;
}

// generate an access token using client id and app secret
async function generateAccessToken() {
    const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64")
    const response = await fetch({
        url: `${baseURL.sandbox}/v1/oauth2/token`,
        method: "POST",
        body: "grant_type=client_credentials",
        headers: {
            Authorization: `Basic ${auth}`,
        },
    });
    const data = await response.json();
    return data.access_token;
}


module.exports = router























