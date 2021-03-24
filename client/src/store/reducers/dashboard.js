const initialState = {
  folders: [
    {
      id: new Date().getTime(),
      name: 'folder 1',
      date: '13.01.2021',
      files: [],
    },
  ],
};

export const actionTypes = {
  DELETE_FOLDER: 'DELETE_FOLDER',
  ADD_FOLDER: 'ADD_FOLDER',
  ADD_FILE: 'ADD_FILE',
};

export const dashboard = (state = initialState, action) => {
  if (action.type === actionTypes.DELETE_FOLDER) {
    const folders = state.folders.filter((item) => item.id !== action.payload);
    return {
      ...state,
      folders,
    };
  } else if (action.type === actionTypes.ADD_FOLDER) {
    const newFolder = {
      id: new Date().getTime(),
      name: action.payload,
      date: '13.03.2024',
      files: [],
    };
    return {
      ...state,
      folders: [...state.folders, newFolder],
    };
  } else if (action.type === actionTypes.ADD_FILE) {
    const folders = state.folders.filter((folder) => folder.name !== action.payload.folderName);
    const currentFolder = state.folders.find((folder) => folder.name === action.payload.folderName);
    const newFile = {
      fileURL: action.payload.fileURL,
      fileName: action.payload.fileName,
    };
    currentFolder.files.push(newFile);
    return {
      ...state,
      folders: [...folders, currentFolder],
    };
  } else {
    return {
      ...state,
    };
  }
};
