import * as axios from 'axios';

const instanceRequest = axios.create({
  headers: {
    'content-type': 'application/vnd.api+json',
    'Cache-Control': 'no-cache',
  },
  withCredentionals: true,
});

//запит треба змінити з /message на /login

export const data = {
  login() {
    return instanceRequest.get('/message').then((res) => res);
  },
};
