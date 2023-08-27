import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const CheckOut = () => {

    const initialOptions = {
        clientId: "AYYAxFjPq7CLlyKrm5kK3KUC15OiOPtPybY19S7BX6kPRgLYaJsXVVg-4psO2b7GhTqSp4aUO_e-G3pk",
        currency: "USD",
        intent: "capture",
    };



    return (
        <PayPalScriptProvider options={initialOptions}>

            <div>
                <p>CART</p>
                <p>Time Package: day</p>
                <p>Total Payment: 100</p>
            </div>
            <PayPalButtons />

        </PayPalScriptProvider>

    )
}

export default CheckOut