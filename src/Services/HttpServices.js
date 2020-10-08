import axios from 'axios';

import { errorMessage } from '../Components/utils/Message';

 axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    errorMessage('مشکلی از سمت سرور پیش آمده است');
  }
});

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};
