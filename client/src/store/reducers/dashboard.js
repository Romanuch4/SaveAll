const initialState = {
  files: [],
};

export const actionTypes = {
  DELETE_FILE: 'DELETE_FILE',
  ADD_FILE: 'ADD_FILE',
};

export const dashboard = (state = initialState, action) => {
  if (action.type === actionTypes.DELETE_FILE) {
    const files = state.files.filter((item) => item.id !== action.payload);
    return {
      ...state,
      files,
    };
  } else if (action.type === actionTypes.ADD_FILE) {
    const newFile = {
      fileURL: action.payload.fileURL,
      fileName: action.payload.fileName,
    };
    return {
      ...state,
      files: [...state.files, newFile],
    };
  } else {
    return {
      ...state,
    };
  }
};
