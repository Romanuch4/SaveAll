const initialState = {
  folders: [
    {
      id: 1,
      name: 'folder 1',
      date: '13.01.2021',
    },
    {
      id: 2,
      name: 'folder 2',
      date: '13.01.2021',
    },
    {
      id: 3,
      name: 'folder 3',
      date: '13.01.2021',
    },
  ],
};

export const actionTypes = {};

export const dashboard = (state = initialState, action) => {
  if (action.type === actionTypes) {
    return {
      ...state,
      isAuth: true,
    };
  } else {
    return {
      ...state,
    };
  }
};
