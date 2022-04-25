import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/api/v1/',
});

const request = (method, url) => {
  const onSuccess = (response) => response.data;
  const onError = (error) => Promise.reject(error.response);

  return instance({
    method,
    url,
  })
    .then(onSuccess)
    .catch(onError);
};
export default request;
