import axios from 'axios'
export function loginUser(payload) {
	return axios.post('/api/v1/auth/login/', payload)
}


export function signupSteps(step, payload,type) {
	let postData =payload
	if(type === "file") {
		postData = new FormData();
		Object.keys(payload).forEach(param => postData.append(param, payload[param])); 
	}
	return axios.post('/api/v1/auth/register/' + step + '/', postData)
}