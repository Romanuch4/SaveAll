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

export const startLoading = () => {
  return {
    type: actionTypes.SET_LOAD_TRUE,
  };
};

export const finishLoading = () => {
  return {
    type: actionTypes.SET_LOAD_FALSE,
  };
};
