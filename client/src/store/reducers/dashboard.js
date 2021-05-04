const initialState = {
  files: [],
};

export const actionTypes = {
  DELETE_FILE: 'DELETE_FILE',
  ADD_FILE: 'ADD_FILE',
  SET_INIT_DATA: 'SET_INIT_DATA',
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
      id: action.payload.id,
      fileURL: action.payload.fileURL,
      fileName: action.payload.fileName,
    };
    return {
      ...state,
      files: [...state.files, newFile],
    };
  } else if (action.type === actionTypes.SET_INIT_DATA) {
    return {
      ...state,
      files: action.payload,
    };
  } else {
    return {
      ...state,
    };
  }
};
