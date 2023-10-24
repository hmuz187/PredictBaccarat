import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CartList } from '../../../components/public/index'
import { CartStateContext, CartDispatchContext, deleteCart } from '../../../context/cart';
import './style.scss'
import icons from '../../../utils/icon/reactIcon';
import { checkOutPaypalApprove } from '../../../apis/payment';
import { AuthDispatchContext, AuthStateContext, updateUserAfterCheckOut} from '../../../context/auth';
import { updateInfoUserAfterCheckOut } from '../../../apis/client';

import { ButtonNavigate } from '../../../components/client';

const CheckOut = () => {

    const navigate = useNavigate()
    const { items } = useContext(CartStateContext)
    const dispatch = useContext(CartDispatchContext)

    const {user} = useContext(AuthStateContext)
    const dispatchUser = useContext(AuthDispatchContext)

    const cartTotal = items
        .map(item => item.price * item.quantity)
        .reduce((prev, current) => prev + current, 0)

    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    const [accessPay, setAccessPay] = useState(false)
    const [showItems, setShowItems] = useState('block')
    const [nameAccessPayment, setNameAccessPayment] = useState(showItems === 'block' ? 'Access Payment' : 'Show Cart')



    // console.log(cartTotal)

    const initialOptions = {
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
    };

    //console.log(initialOptions)

    const handleApprove = async (orderID) => {
        // call backend function to fullfill order
        // console.log(orderID)

        //console.log(cartTotal)

        const data = { orderID, totalPayment: cartTotal, cart: items, user }

        const responsePaypalApprove = await checkOutPaypalApprove(data)
        //console.log(responsePaypalApprove)


        
        //clear state Cart
        await deleteCart(dispatch)

        const {email} = user
        const response = await updateInfoUserAfterCheckOut({userEmail: email})
        if (response && response.data && response.data.metadata && response.data.metadata.metadata && response.data.metadata.metadata.user) {
            //console.log(response.data.metadata.metadata.user)
            updateUserAfterCheckOut(dispatchUser, response.data.metadata.metadata.user)
          }

        //if response is success
        setPaidFor(true);


        //refresh user's account or subscription status


        //if the response is error
        //alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at .....&gmail.com for assistance!!!")
        navigate('/private/dashboard')

    }

    if (paidFor) {
        //display success messafe, modal or redirect user to success page
        alert("Thank you for your purchase!")
    }

    if (error) {
        //Display error message, modal or redirect user to error page
        alert(error)
    }


    const { BiHome } = icons
    return (
        <PayPalScriptProvider options={initialOptions}>
            <div className='checkOutPageClient'>
                <div className='checkOutPayment' style={{ display: showItems }}>
                    <ButtonNavigate />
                    <h3>YOUR CART</h3>
                    <div className='cardCheckOut'>
                        <CartList />
                    </div>
                </div>
                <div className='accessPayment' >
                    <button type='submit'
                        onClick={() => {
                            setAccessPay(!accessPay)
                            setShowItems(showItems === 'block' ? 'none' : 'block')
                            setNameAccessPayment(nameAccessPayment === 'Access Payment' ? 'Show Cart' : 'Access Payment')
                        }}>
                        {nameAccessPayment}
                    </button>
                </div>

                {accessPay ? <><div className='checkOutPaypal'>
                    <PayPalButtons
                        onClick={(data, actions) => {
                            //validate on button click, client or server side
                            const hasAlreadyBought = false

                            if (hasAlreadyBought) {
                                setError('You already bought algorithm prediction. Go to your account to view your list of algorithm package')

                                return actions.reject()
                            } else {
                                return actions.resolve()
                            }
                        }}

                        createOrder={(data, actions) => {

                            const payload = {
                                intent: "CAPTURE",
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: "USD",
                                            value: cartTotal,
                                        },
                                    },
                                ],
                            };

                            return actions.order.create(payload)
                        }}
                        onApprove={async (data, actions) => {
                            const order = await actions.order.capture()
                            //console.log(`orderId::`, order.id)
                            // console.log(`data.orderID::`, data.orderID)

                            handleApprove(data.orderID)
                        }}
                        onCancel={() => {
                            //display cancel message, modal or redirect user to cancel page or back to CART
                        }}
                        onError={(error) => {
                            setError(error)
                            console.error("Paypal Checkout onError", error)
                        }}
                        
                        forceReRender={cartTotal}
                    />
                </div></> : <></>}
            </div>
        </PayPalScriptProvider>

    )
}

export default CheckOut










// const handleCreateOrder = async () => {
//     const idDate = Date.now()
//     const data = { idDate, username: 'alex', items: items, totalPrice: cartTotal }
//     const response = await PaypalCreatOrder(data)
//     //console.log(`orderID`,response)
// }
// const handleApprove = async (data) => {
//     const response = await PaypalApprove(data)
//     //console.log(response)
// }