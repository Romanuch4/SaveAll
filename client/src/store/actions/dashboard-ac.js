import { actionTypes } from '../reducers/dashboard';
import { finishLoading, logIn, startLoading } from '../actions/common-ac';
import { data } from '../../api/api';

export const deleteFile = (id) => {
  return {
    type: actionTypes.DELETE_FILE,
    payload: id,
  };
};

export const addFile = (fileData) => {
  return {
    type: actionTypes.ADD_FILE,
    payload: fileData,
  };
};

export const setInintialData = (files) => {
  return {
    type: actionTypes.SET_INIT_DATA,
    payload: files,
  };
};

export const setInitialDataThunk = (history) => async (dispatch) => {
  dispatch(startLoading());
  const files = await data.login();
  dispatch(logIn());
  dispatch(setInintialData(files));
  history.push('/dashboard');
  dispatch(finishLoading());
};

export const addFileThunk = ({ src, fileName }) => async (dispatch) => {
  const fileData = {
    id:
      Math.floor(Math.random() * 100000000000) +
      new Date().getMilliseconds() * Math.floor(Math.random()) * 100000000000,
    fileURL: src,
    fileName,
  };
  dispatch(startLoading());
  const res = await data.addFile(JSON.stringify(fileData));
  console.log(res);
  dispatch(addFile(fileData));
  dispatch(finishLoading());
};

export const deleteFileThunk = (id) => async (dispatch) => {
  dispatch(startLoading());
  const res = await data.deleteFile(id);
  console.log(res);
  dispatch(deleteFile(id));
  dispatch(finishLoading());
};
