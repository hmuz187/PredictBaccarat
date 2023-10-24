
const express = require('express');
const router = express.Router()
const {Types} = require('mongoose');
const { BadRequestError } = require('../../helpers/error.response');
const invoiceModel = require('../../models/invoice.model');
const userModel = require('../../models/user.model');
const timePackageModel = require('../../models/timePackage.model');
const { getInfoData } = require('../../utils/index.lodash');

router.post('/paypal/approve/', async (req, res, next)=> {

    //create new invoiceModel
    const {orderID, totalPayment, cart, user} = req.body
    const newInvoice = await invoiceModel.create({
        invoice_owner: new Types.ObjectId(user._id),
        invoice_orderId: orderID, 
        invoice_applyPayment: 'Paypal',
        invoice_status: 'paid',
        invoice_detail: [cart],
        invoice_totalPayment: totalPayment}) 
    if(!newInvoice) throw new BadRequestError(`Error save Invoice to database`)

        // // update cart in userModel 
    const foundUser = await userModel.findOne({_id: new Types.ObjectId(user._id) })

    if(!foundUser) throw new BadRequestError(`Error update user Cart`)

    var {cart: foundCart} = foundUser
    foundCart.push(orderID)

    const filter = {_id: new Types.ObjectId(user._id) }
    const update = {cart: foundCart, totalPaid: foundUser.totalPaid+totalPayment}
    const options = {upsert: true, new: true}

    await userModel.findOneAndUpdate(filter, update, options)


    // //update timePackageModel
    
    var logicMathTotal=0, aiPredictionTotal=0, naturalRandomTotal=0, fixPatternTotal=0

    cart.map((item)=> {
        if(item.code===101) logicMathTotal = logicMathTotal + item.quantity*item.timePackage
        if(item.code===102) aiPredictionTotal = aiPredictionTotal + item.quantity*item.timePackage
        if(item.code===103) naturalRandomTotal = naturalRandomTotal + item.quantity*item.timePackage
        if(item.code===104) fixPatternTotal = fixPatternTotal + item.quantity*item.timePackage
    })



    const foundTimePackage = await timePackageModel.findOne({userId: new Types.ObjectId(user._id)})

    //create
    if(!foundTimePackage) {
        await timePackageModel.create({
            userId: new Types.ObjectId(user._id),
            invoiceList: [orderID],
            logicMath: Date.now() + logicMathTotal*24*60*60000,
            aiPrediction: Date.now() + aiPredictionTotal*24*60*60000,
            naturalRandom: Date.now() + naturalRandomTotal*24*60*60000,
            fixPattern: Date.now() + fixPatternTotal*24*60*60000,
        })
    }

    // const foundLastTimePackage = await timePackageModel.findOne({userId: new Types.ObjectId(user._id)})


    //update when have foundTimePackage

    if(foundTimePackage) {

        // console.log(foundTimePackage)
    
    var {invoiceList, logicMath, aiPrediction, naturalRandom, fixPattern} = foundTimePackage



    var newInvoiceList = invoiceList ? invoiceList.push(orderID) : [] //[invoiceList, orderID]
    
    if(logicMath<Date.now()) {logicMath = Date.now() + logicMathTotal*24*60*60000} else {logicMath = logicMath + logicMathTotal*24*60*60000}

    if(aiPrediction<Date.now()) {aiPrediction = Date.now() + aiPredictionTotal*24*60*60000} else {aiPrediction = aiPrediction + aiPredictionTotal*24*60*60000}

    if(naturalRandom<Date.now()) {naturalRandom = Date.now() + naturalRandomTotal*24*60*60000} else {naturalRandom = naturalRandom + naturalRandomTotal*24*60*60000}

    if(fixPattern<Date.now()) {fixPattern = Date.now() + fixPatternTotal*24*60*60000} else {fixPattern = fixPattern + fixPatternTotal*24*60*60000}
    
   
    await timePackageModel.findOneAndUpdate(
        {userId: new Types.ObjectId(user._id)},
        {   
            invoiceList: newInvoiceList, //orderID Paypal
            logicMath,
            aiPrediction,
            naturalRandom,
            fixPattern
        },
        {upsert: true, new: true}
        )
    }
    




//     Instead of // Date.now() + 365 days || 1 year // Use // Date.now() + 365*24*60*60000


    // const filterT = {_id: new Types.ObjectId(user._id) }
    // const updateT = {
    //             logicMath: logicMath<Date.now() ? logicMath = Date.now() + logicMathTotal*24*60*60000 : logicMath = logicMath + logicMathTotal*24*60*60000,
    //             aiPrediction: aiPrediction<Date.now() ? aiPrediction = Date.now() + aiPredictionTotal*24*60*60000 : aiPrediction = aiPrediction + aiPredictionTotal*24*60*60000,
    //             naturalRandom: naturalRandom<Date.now() ? naturalRandom = Date.now() + naturalRandomTotal*24*60*60000 : naturalRandom = naturalRandom + naturalRandomTotal*24*60*60000,
    //             fixPattern: fixPattern<Date.now() ? fixPattern = Date.now() + fixPatternTotal*24*60*60000 : fixPattern = fixPattern + fixPatternTotal*24*60*60000
    //         }
    // const optionsT = {upsert: true, new: true}


    // await timePackageModel.findOneAndUpdate(filterT, updateT, optionsT)
    // await timePackageModel.findOneAndUpdate(filterT, {$push: {invoiceList: orderID}})




    

    res.json({
        newInvoice: newInvoice
    })
})


module.exports = router












// var {logicMath: oldLogicMath, aiPrediction: oldAiPrediction, naturalRandom: oldNaturalRandom,fixPattern: oldFixPattern } = foundTimePackage
    
//     if(oldLogicMath<Date.now()) {oldLogicMath = Date.now() + logicMathTotal*24*60*60000} else {oldLogicMath = oldLogicMath + logicMathTotal*24*60*60000}

//     if(oldAiPrediction<Date.now()) {oldAiPrediction = Date.now() + aiPredictionTotal*24*60*60000} else {oldAiPrediction = oldAiPrediction + aiPredictionTotal*24*60*60000}

//     if(oldNaturalRandom<Date.now()) {oldNaturalRandom = Date.now() + naturalRandomTotal*24*60*60000} else {oldNaturalRandom = oldNaturalRandom + naturalRandomTotal*24*60*60000}

//     if(oldFixPattern<Date.now()) {oldFixPattern = Date.now() + fixPatternTotal*24*60*60000} else {oldFixPattern = oldFixPattern + fixPatternTotal*24*60*60000}

//     await timePackageModel.findOneAndUpdate(
//         {userId: new Types.ObjectId(user._id)},
//         {invoiceList: foundTimePackage.invoiceList.push(orderID),
//         logicMath: oldLogicMath,
//         aiPrediction: oldAiPrediction,
//         naturalRandom: oldNaturalRandom,
//         fixPattern: oldFixPattern
//         },
//         {upsert: true, new: true}
//         )







// const express = require('express')
// const router = express.Router()
// const axios = require('axios')
// require('dotenv').config()

// // const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
// // const baseURL = {
// //     sandbox: "https://api-m.sandbox.paypal.com",
// //     production: "https://api-m.paypal.com"
// // };


// // router.post('/test/payment/paypal/:id', (req, res) => {

// //     let obj = JSON.stringify(req.body)
// //     let stringify = JSON.parse(obj);
// //     //console.log(req.body)

// //     // Get List of levels 
// //     var LevelList = JSON.stringify(req.body.level_id);
// //     var List = JSON.parse(LevelList);


// //     // Get Course ID
// //     var course_id = (req.body.course_id);
// //     console.log("Course ID: " + course_id)
// //     console.log("Course Length: " + course_id.length)



// //     var subscription_id = req.params.id;
// //     var username = req.params.username;

// //     console.log("subscription ID: " + subscription_id)

// //     // Get End Date Monthly

// //     var end_date_monthly = new Date();
// //     end_date_monthly.setMonth(end_date_monthly.getMonth() + 1);
// //     console.log("Date end : " + end_date_monthly.getFullYear(), end_date_monthly.getMonth() + 1, end_date_monthly.getDate());

// //     // Get End Date Yearly

// //     var end_date_yearly = new Date();
// //     end_date_yearly.setMonth(end_date_yearly.getMonth() + 12);
// //     console.log("Date end : " + end_date_yearly.getFullYear(), end_date_yearly.getMonth() + 12, end_date_yearly.getDate());

// //     // Get Number of users
// //     var get_numberofusers = JSON.stringify(req.body.numberofusers);
// //     var numbersofusers = JSON.parse(get_numberofusers);
// //     console.log("number of users: " + numbersofusers)

// //     // Get Total
// //     var get_totalPirce = JSON.stringify(req.body.total);
// //     var TotalPrice = JSON.parse(get_totalPirce);
// //     console.log("Total: " + TotalPrice)

// //     // Get Course Name
// //     var get_course_name = JSON.stringify(req.body.c_name);
// //     var course_name = JSON.parse(get_course_name);
// //     console.log("Course Name: " + course_name);

// //     // Get Unit Price
// //     var get_unit_price = JSON.stringify(req.body.price_unit);
// //     var UnitPrice = JSON.parse(get_unit_price);
// //     console.log("Unit Price: " + UnitPrice)




// //     var url = 'https://v1.qalamnet.com/dashboard/'


// //     var create_payment_paypal_json = {
// //         "intent": "sale",
// //         "payer": {
// //             "payment_method": "paypal"
// //         },
// //         "redirect_urls": {
// //             "return_url": url + "transaction_success",
// //             "cancel_url": url + "transaction_canceled"
// //         },
// //         "transactions": [{
// //             "item_list": {
// //                 "items": [
// //                     {
// //                         "name": course_name,
// //                         "sku": "C001",
// //                         "price": UnitPrice,
// //                         "currency": "USD",
// //                         "quantity": numbersofusers
// //                     },
// //                 ]
// //             },
// //             "amount": {
// //                 "currency": "USD",
// //                 "total": TotalPrice
// //             },
// //             "description": "Subscription"
// //         }]
// //     };
    
// //     paypal.payment.create(create_payment_paypal_json, function (error, payment) {
// //         if (error) {
// //             throw error;
// //         } else {
// //             for (let i = 0; i < payment.links.length; i++) {
// //                 if (payment.links[i].rel === 'approval_url') {
// //                     res.redirect(payment.links[i].href);
// //                 }
// //             }
// //         }
// //     });

// // });

// // router.post('/test/paypal/:id', async (req, res) => {

// //     const {items, username, idDate, totalPrice} = req.body

// //     console.log("Total: " + totalPrice)

// //     console.log("Item Infos " + items);


// //     var url = 'https://v1.qalamnet.com/dashboard/'

// //     const order = await createOrder({items, username, totalPrice, idDate});
// //     res.json(order);


// // })


// // router.post("/paypal/create-paypal-order", async (req, res) => {

// //     const cart= req.body
// //     const order = await createOrder()
// //     //console.log(`order`, order)
// //     //console.log(`cart`, cart)
// //     res.json(order);

// // });

// // router.post("/paypal/capture-paypal-order", async (req, res) => {
// //     const { orderID } = req.body;
// //     const captureData = await capturePayment(orderID);
// //     // TODO: store payment information such as the transaction ID
// //     res.json(captureData);
// // });


// // //////////////////////
// // // PayPal API helpers
// // //////////////////////

// // // use the orders api to create an order
// // async function createOrder() {
// //     // console.log(`create order`, cart.totalPrice)
// //     const accessToken = await generateAccessToken();
// //     const url = `${baseURL.sandbox}/v2/checkout/orders`;
// //     const payload = {
// //         intent: "CAPTURE",
// //         purchase_units: [
// //           {
// //             amount: {
// //               currency_code: "USD",
// //               value: "100.00",
// //             },
// //           },
// //         ],
// //       };
// //     const response = await axios({
// //         url,
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`,
// //         },
// //         body: JSON.stringify(payload),
// //     });
// //     const data = await response.json();
// //     //console.log(data)
// //     return data.id? data.id : null;
// // }


// // // use the orders api to capture payment for an order
// // async function capturePayment(orderId) {
// //     //console.log(orderId)
// //     const accessToken = await generateAccessToken();
// //     const url = `${baseURL.sandbox}/v2/checkout/orders/${orderId}/capture`;
// //     const response = await axios({
// //         url,
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`,
// //         },
// //     });
// //     const data = await response.json();
// //     return data;
// // }

// // // generate an access token using client id and app secret
// // async function generateAccessToken() {
// //     const auth = Buffer.from(PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET).toString("base64")
// //     const response = await axios({
// //         url: `${baseURL.sandbox}/v1/oauth2/token`,
// //         method: "POST",
// //         body: "grant_type=client_credentials",
// //         headers: {
// //             Authorization: `Basic ${auth}`,
// //         },
// //     });
// //     const data = await response.json();
// //     //console.log(data.access_token)
// //     return data.access_token;
// // }


// module.exports = router























