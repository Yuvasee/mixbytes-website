import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.mixbytes.io/',
  timeout: 1000
});
