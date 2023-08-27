import axios from "../axios";

const clientPath = '/v1/client'

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
            url:`${clientPath}/signUp/getVerifyCode`,
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }
}