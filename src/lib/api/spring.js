import axios from 'axios';

const spring = axios.create();

/*

// API 주소 설정
client.defaults.baseURL = '';

// 헤더 설정
client.defaults.headers.common.Authorization = 'Beaer';

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

*/

export default spring;
