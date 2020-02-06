import axios from 'axios'

const i  = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

export const fetchUserAction = () => {
    return (dispatch) => {
        i.get('/api/current_user')
        .then(res => {
            console.log('login res', res.data)
            dispatch({type: 'GET_USER', payload: res.data})
        }).catch(err => {
            console.error(err)
        })
    }
}