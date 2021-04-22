import * as axios from 'axios';

const instanceRequest = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const data = {
  getData() {
    return instanceRequest.get('/message').then((res) => res);
  },
};
