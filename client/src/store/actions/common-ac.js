import { actionTypes } from '../reducers/common';
import { data } from '../../api/api';

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

export const logOutThunk = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    await data.logOut();
    dispatch(logOut());
  } catch (error) {
    console.log(error);
  }
  dispatch(finishLoading());
};
