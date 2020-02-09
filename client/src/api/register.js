import axios from 'axios'

const END_POINT = 'https://comcamp.io/api/register';

class Register {
    constructor() {
        this.baseURL = END_POINT
    }

    sendData = async (step, payload) => {
        // return true
        try {
            const res = await axios.post(this.baseURL + '/' + step, payload, {

		withCredentials: true
	})
            console.log("Send Data")
            if(res.status === 200) {
                console.log("success")
                return true
            }
        } catch(err) {
            console.log("Error")
            const status = err.response.status
            if(status === 401) {
                window.location = 'https://comcamp.io'
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
                window.location = 'https://comcamp.io'
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
