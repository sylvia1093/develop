const axiosConfig = { headers: { Authorization: 'Token '+localStorage.getItem('auth_key') } }
export default axiosConfig