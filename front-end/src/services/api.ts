import axios from 'axios'

export const api = axios.create({
    baseURL:'http://localhost:3333',
})

axios.interceptors.response.use(res => res, error => {
    if(error.response.status === 401) {
        window.location.href='/'
    }
})