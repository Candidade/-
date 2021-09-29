import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

axios.defaults.timeout = 10000;
axios.defaults.baseURL = apiUrl;

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = { 'Content-Type': 'application/json' };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === 2) {
      console.log('过期');
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function Http({ method, url, params, data }) {
  return new Promise((resolve, reject) => {
    switch (method.toUpperCase()) {
      case 'GET':
        axios.get(url, { params }).then((response) => {
          resolve(response);
        });
        break;
      case 'POST':
        axios.post(url, { params }, data).then((response) => {
          resolve(response);
        });
        break;
      case 'PUT':
        axios.put(url, { params }, data).then((response) => {
          resolve(response);
        });
        break;
      case 'PATCH':
        axios.patch(url, { params }, data).then((response) => {
          resolve(response);
        });
        break;
      case 'DELETE':
        axios.delete(url, { params }, data).then((response) => {
          resolve(response);
        });
        break;

      default:
        break;
    }
  });
}
