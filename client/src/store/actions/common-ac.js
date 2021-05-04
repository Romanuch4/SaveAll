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
  const res = await data.logOut();
  console.log(res);
  dispatch(logOut());
  dispatch(finishLoading());
};
