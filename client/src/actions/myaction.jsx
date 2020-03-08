import axios from 'axios'
// const END_POINT = 'http://localhost:5000'
const END_POINT = 'https://comcamp.io'

const i  = axios.create({
    baseURL: END_POINT,
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
