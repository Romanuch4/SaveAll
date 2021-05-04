import * as axios from 'axios';

const instanceRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

//запит треба змінити з /message на /login

export const data = {
  login() {
    return instanceRequest.get('/message').then((res) => {
      if (res.request.status === 200 && res.request.statusText === 'OK') {
        return res.data;
      }
    });
  },

  logOut() {
    return instanceRequest.get('/logout').then((res) => {
      return res;
    });
  },

  addFile(fileData) {
    return instanceRequest.post('/message', fileData).then((res) => {
      return res;
    });
  },

  deleteFile(id) {
    return instanceRequest.delete(`/message/${id}`, { id }).then((res) => {
      return res;
    });
  },
};
