import axios from 'axios';

export default () => {
  return axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/api/v1',
  })
};
