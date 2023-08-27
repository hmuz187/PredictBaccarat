import React from 'react'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {

  
  
  const initialOptions = {
    clientId: "AYYAxFjPq7CLlyKrm5kK3KUC15OiOPtPybY19S7BX6kPRgLYaJsXVVg-4psO2b7GhTqSp4aUO_e-G3pk",
    currency: "USD",
    intent: "capture",
  };

  // const paymentPath = '/v1/payment'

  // const cartData = {
  //   userId: 'minhhy',
  //   totalPayment: 120,
  //   applyPayment: 'Paypal',
  //   cart_details: [
  //     {
  //       algorithm: 'logicMath',
  //       package: { name: 'day', price: 10, quantity: 2 }
  //     },
  //     {
  //       algorithm: 'naturalRandom',
  //       package: { name: 'week', price: 50, quantity: 2 }
  //     },
  //   ],
  //   // status: 'checking'
  // }

  // const createOrder = async (data) => {
  //   try {
  //     console.log(data)
  //     const response = await axios({
  //       url: `${paymentPath}/paypal/orders`,
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       // use the "body" param to optionally pass additional order information
  //       // like product skus and quantities
  //       body: JSON.stringify({ cart: cartData })
  //     })
  //     console.log(response.json())
  //     return (response.json())
  //   } catch (error) {
  //     return (error.response)
  //   }
  // }

  // const onApprove = async (data) => {
  //   try {
  //     console.log(data)
  //     const response = await axios({
  //       url: `${paymentPath}/paypal/orders/:orderID/capture`,
  //       method: "POST",
  //       body: JSON.stringify({
  //         orderID: data.orderID
  //       })
  //     })
  //     return (response)
  //   } catch (error) {
  //     return (error.response)
  //   }
  // }


  return (
    <PayPalScriptProvider options={initialOptions}>

      <PayPalButtons/>

    </PayPalScriptProvider>

  )
}

export default Checkout