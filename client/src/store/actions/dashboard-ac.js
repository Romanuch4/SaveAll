import { actionTypes } from '../reducers/dashboard';

export const deleteFolder = (id) => {
  return {
    type: actionTypes.DELETE_FOLDER,
    payload: id,
  };
};

export const addFolder = (name) => {
  return {
    type: actionTypes.ADD_FOLDER,
    payload: name,
  };
};

export const addFiles = ({ src, fileName, folderName }) => {
  return {
    type: actionTypes.ADD_FILE,
    payload: {
      fileURL: src,
      fileName,
      folderName,
    },
  };
};
