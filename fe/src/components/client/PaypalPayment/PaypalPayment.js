
import React from "react"
import axios from 'axios'

import { PayPalButtons } from "@paypal/react-paypal-js";


const paymentPath = '/v1/payment'


const PaypalPayment = () => {

    const createOrder = (data) => {
        return axios({
            url: `${paymentPath}/paypal/create-paypal-order`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart: [
                    {
                        sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                        quantity: "YOUR_PRODUCT_QUANTITY",
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    };
    const onApprove = (data) => {
        return axios({
            url: `${paymentPath}/paypal/capture-paypal-order`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => response.json());
    };
    return (
        <PayPalButtons
            createOrder={(data, actions) => createOrder(data)}
            onApprove={(data, actions) => onApprove(data)}
        />
    );
}

export default PaypalPayment



































// import React from 'react'
// import axios from 'axios'
// import { json } from 'react-router-dom'
// import {PayPalButtons } from "@paypal/react-paypal-js";


// const paymentPath = '/v1/payment'



// const PaypalPayment = () => {

//     const cartData = {
//         userId: 'minhhy',
//         totalPayment: 120,
//         applyPayment: 'Paypal',
//         cart_details: [
//             {
//                 algorithm: 'logicMath',
//                 package: { name: 'day', price: 10, quantity: 2 }
//             },
//             {
//                 algorithm: 'naturalRandom',
//                 package: { name: 'week', price: 50, quantity: 2 }
//             },
//         ],
//         // status: 'checking'
//     }

//     const createOrder = async () => {
//         try {
//             const response = await axios({
//                 url: `${paymentPath}/paypal/orders`,
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 // use the "body" param to optionally pass additional order information
//                 // like product skus and quantities
//                 body: JSON.stringify({cart: cartData})
//             })
//             console.log(response.json())
//             return (response.json())
//         } catch (error) {
//             return (error.response)
//         }
//     }

//     const onApprove = async (data) => {
//         try {
//             const response = await axios({
//             url: `${paymentPath}/paypal/orders/:orderID/capture`,
//             method: "POST",
//             body: JSON.stringify({
//                 orderID: data.orderID
//             })
//             })
//             return (response)
//         } catch(error) {
//             return (error.response)
//         }
//     }

//     return (
//         <PayPalButtons
//             createOrder={(data, actions) => createOrder(data, actions)}
//             onApprove={(data, actions) => onApprove(data, actions)}
//         />
//     )
// }

// export default PaypalPayment