import axios from 'axios';

export default axios.create({
  baseURL: 'http://46.101.209.63/',
  timeout: 1000
});
