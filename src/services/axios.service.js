
import axios from 'axios';

class AxiosService {
  constructor() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.defaults.baseURL = "http://127.0.0.1/api/";
  }
  postCall(endpoint, params) {
    return axios.post(endpoint, params);
  }

  deleteCall(endpoint, params) {
    return axios.delete(endpoint, params);
  }

  putCall(endpoint, params) {
    return axios.put(endpoint, params);
  }

  getCall(endpoint) {
    return axios.get(endpoint);
  }

  setUpParams() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.defaults.baseURL = "http://127.0.0.1/api/";
  }

}

export const axiosService = new AxiosService();