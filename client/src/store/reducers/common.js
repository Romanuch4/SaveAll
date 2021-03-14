const initialState = {
  isLoading: false,
  isAuth: false,
};

export const actionTypes = {
  SET_AUTH_TRUE: 'IS_AUTH',
  SET_AUTH_FALSE: 'SET_AUTH_FALSE',
};

export const common = (state = initialState, action) => {
  if (action.type === actionTypes.SET_AUTH_TRUE) {
    return {
      ...state,
      isAuth: true,
    };
  } else if (action.type === actionTypes.SET_AUTH_FALSE) {
    return {
      ...state,
      isAuth: false,
    };
  } else {
    return {
      ...state,
    };
  }
};
