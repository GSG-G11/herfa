import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1/',
});

const request = (method, url, data, signal) => {
  const onSuccess = (response) => response.data;
  const onError = (error) => Promise.reject(error.response);

  return instance({
    method,
    url,
    data,
    signal,
  })
    .then(onSuccess)
    .catch(onError);
};
export default request;
