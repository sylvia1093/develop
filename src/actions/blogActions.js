import axios from 'axios'
import axiosConfig from '../config/axiosConfig'

export default function fetchBlogList(page) {
    if(page) {
        return (
            {
                type: 'FETCH_BLOG_SCROLL',
                payload: axios.get('/api/v1/blog/feed/?page='+page,axiosConfig)
    
            }
        )
    }
    return (
        {
            type: 'FETCH_BLOG',
            payload: axios.get('/api/v1/blog/feed/',axiosConfig)

        }
    )
}