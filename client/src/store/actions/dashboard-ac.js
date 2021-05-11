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
  try {
    const files = await data.login();
    dispatch(logIn());
    dispatch(setInintialData(files.data));
    history && history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
  dispatch(finishLoading());
};

export const addFileThunk = ({ src, fileName }) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const fileData = {
      id:
        Math.floor(Math.random() * 100000000000) +
        new Date().getMilliseconds() * Math.floor(Math.random()) * 100000000000,
      fileURL: src,
      fileName,
    };
    await data.addFile(JSON.stringify(fileData));
    dispatch(addFile(fileData));
  } catch (error) {
    console.log(error);
  }
  dispatch(finishLoading());
};

export const deleteFileThunk = (id) => async (dispatch) => {
  dispatch(startLoading());
  try {
    await data.deleteFile(id);
    dispatch(deleteFile(id));
  } catch (error) {
    console.log(error);
  }
  dispatch(finishLoading());
};
