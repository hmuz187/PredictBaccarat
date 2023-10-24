import axios from "../axios";

const paymentPath = '/v1/payment'

const header = new Headers();
header.append('Access-Control-Allow-Origin', '*');





export const checkOutPaypalApprove = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${paymentPath}/paypal/approve/`,
            method: 'POST',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}


// export const createInvoice = async (data) => {
//     try {
//         // console.log(data)
//         const response = await axios({
//             url:`/v1/payment/paypal/approve/createinvoice`,
//             method: 'post',
//             data
//         })
//         return (response)
//     } catch(error) {
//         return (error.response)
//     }
// }

// export const updateTime = async (data) => {
//     try {
//         // console.log(data)
//         const response = await axios({
//             url:`/v1/payment/paypal/approve/updatetime`,
//             method: 'post',
//             data
//         })
//         return (response)
//     } catch(error) {
//         return (error.response)
//     }
// }

// export const updateCartUser = async (data) => {
//     try {
//         // console.log(data)
//         const response = await axios({
//             url:`/v1/payment/paypal/approve/updatecartuser`,
//             method: 'post',
//             data
//         })
//         return (response)
//     } catch(error) {
//         return (error.response)
//     }
// }

