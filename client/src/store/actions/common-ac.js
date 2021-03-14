import { actionTypes } from '../reducers/common';

export const logIn = () => {
  return {
    type: actionTypes.SET_AUTH_TRUE,
  };
};

export const logOut = () => {
  return {
    type: actionTypes.SET_AUTH_FALSE,
  };
};
