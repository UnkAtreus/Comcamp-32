import axios from 'axios'

const END_POINT = '/api/register';

class Register {
    constructor() {
        this.baseURL = END_POINT
    }

    // sendData = async (payload) => {
    //     await axios.post(this.baseURL, payload)
    //     .then(res => {
    //         console.log("Send Data")
    //         // console.log(res.data)
    //         if(res.status === 200) {
    //             console.log("OK")
    //             return true
    //         }
    //     })
    //     .catch(err => {
    //         const status = err.response.status
    //         console.log(status)
    //         if(status === 401) {
    //             window.location = '/'
    //             return false
    //         } else if(status === 400) {
    //             console.log("err 400")
    //             return false
    //         }
    //         return false
    //     }) 
    // }

    sendData = async (step, payload) => {
        try {
            const res = await axios.post(this.baseURL + '/' + step, payload)
            console.log("Send Data")
            if(res.status === 200) {
                console.log("success")
                return true
            }
        } catch(err) {
            console.log("Error")
            const status = err.response.status
            if(status === 401) {
                window.location = '/'
                return false
            } else {
                return false
            } 
        }
    }

    logout = async () => {
        try {
            const res = await axios.get('/api/logout')
            console.log("Send Data2")
            if(res.status === 200) {
                window.location = '/'
                return true
            }
        } catch(err) {
            console.log("Error")
            const status = err.response.status
            return false
        }
    }
}

const register = new Register()

export default register;