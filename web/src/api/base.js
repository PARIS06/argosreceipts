import axios from 'axios';

const BASE_URL = 'http://54.152.6.107';

let config = {
   authToken: ''
};

export const getAPIConfig = () => ({ ...config });

export const updateAPIConfig = newConfig => {
   config = {
      ...config,
      ...newConfig
   };
};

export const callAPI = (endpoint, method, data) => {
   return new Promise((resolve, reject) => {
      axios({
         method,
         headers: {
            Authorization: `Bearer ${getAPIConfig().authToken}`
         },
         url: `${BASE_URL}${endpoint}`,
         data
      })
         .then(res => resolve(res.data))
         .catch(err => {
            reject({
               status: (err.response && err.response.status) || '',
               message: err.message || ''
            });
         });
   });
};




