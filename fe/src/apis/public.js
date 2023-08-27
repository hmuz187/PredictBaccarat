import axios from "../axios";

const publicPath = '/v1/public'

export const postTableResultString = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url:`${publicPath}/try/tableResultString`,
            // url:'/v1/public/try/tableResultString',
            method: 'post',
            data
        })
        return (response)
    } catch(error) {
        return (error.response)
    }

    // axios.post("/shop/login", data, { headers })
        //     .then((response) => {
        //         console.log(response.data.metadata);
        //         navigate('/product')
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

}

