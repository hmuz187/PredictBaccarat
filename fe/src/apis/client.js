import axios from "../axios";

const clientPath = '/v1/client'

// const header = new Headers();
// header.append('Access-Control-Allow-Origin', '*');



export const signUp = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/signUp`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}

export const getVerifyCodeSignup = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/signup/getVerifyCode`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}


export const getVerifyCodeForgotPassword = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/forgotPassword/getVerifyCode`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}


export const forgotPassword = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/forgotPassword`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}



export const logIn = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/signin`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}




export const logOut = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/logout`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}


export const updateInfoUserAfterCheckOut = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/updateInfoUserAfterCheckOut`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}


export const postGetPredictResult = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/getPredict`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}


export const getListInvoice = async (id) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/getList/invoice/${id}`,
            method: 'get',
        })
        // return (response)
        return (response.data.metadata.metadata)
    } catch(error) {
        return (error.response)
    }
}


export const getTimePackageCurrent = async (id) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${clientPath}/getTimePackageCurrent/${id}`,
            method: 'get',
        })
        // return (response)
        return (response.data.metadata.metadata)
    } catch(error) {
        return (error.response)
    }
}

































// export const checkOutPaypal = async (data) => {
//     try {
//         // console.log(data)
//         const {idDate} = data
//         const response = await axios({
//             url:`/v1/payment/paypal/${idDate}`,
//             method: 'post',
//             data
//         })
//         return (response)
//     } catch(error) {
//         return (error.response)
//     }
// }

// export const PaypalCreatOrder = async (data) => {
//     try {
//         const response = await axios({
//             url:`/v1/payment/paypal/create-paypal-order`,
//             method: 'post',
//             data
//         })
//         return (response)
//     } catch(error) {
//         return (error.response)
//     }
// }

// export const PaypalApprove = async (data) => {
//     try {
//         const {idDate} = data
//         const response = await axios({
//             url:`/v1/payment/paypal/capture-paypal-order`,
//             method: 'post',
//             data
//         })
//         return (response)
//     } catch(error) {
//         return (error.response)
//     }
// }