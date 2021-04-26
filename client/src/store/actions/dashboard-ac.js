import { actionTypes } from '../reducers/dashboard';

export const deleteFile = (id) => {
  return {
    type: actionTypes.DELETE_FILE,
    payload: id,
  };
};

export const addFile = ({ src, fileName }) => {
  return {
    type: actionTypes.ADD_FILE,
    payload: {
      fileURL: src,
      fileName,
    },
  };
};
