const initialState = {
  folders: [
    {
      id: new Date().getTime(),
      name: 'folder 1',
      date: '13.01.2021',
    },
    {
      id: new Date().getTime() + 1,
      name: 'folder 2',
      date: '13.01.2021',
    },
    {
      id: new Date().getTime() + 2,
      name: 'folder 3',
      date: '13.01.2021',
    },
  ],
};

export const actionTypes = {
  DELETE_FOLDER: 'DELETE_FOLDER',
  ADD_FOLDER: 'ADD_FOLDER',
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
    };
    return {
      ...state,
      folders: [...state.folders, newFolder],
    };
  } else {
    return {
      ...state,
    };
  }
};
