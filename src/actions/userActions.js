import axios from 'axios'
import axiosConfig from '../config/axiosConfig'

export function fetchUserInfo() {
    return {
        type: 'FETCH_USERDETAILS',
        payload: axios.get('/api/v1/author/who-am-i/',axiosConfig)
    }
}