import axios from 'axios';
export default {
  setupInterceptors: () => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        let response = error.response;
        if (response.request.status === 403) {
          window.location.replace(window.location.origin + '/login/');
        }
        if (response.request.status === 404) {
        }
        if (response.request.status === 502) {
        }
        if (response.request.status === 500) {
        }
        if (response.request.status === 401) {
        }
        return Promise.reject(error.response);
      }
    );
  }
};
