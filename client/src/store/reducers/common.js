const initialState = {
  isLoading: true,
  isAuth: false,
};

export const actionTypes = {
  SET_AUTH_TRUE: 'IS_AUTH',
  SET_AUTH_FALSE: 'SET_AUTH_FALSE',
  SET_LOAD_TRUE: 'SET_LOAD_TRUE',
  SET_LOAD_FALSE: 'SET_LOAD_FALSE',
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
  } else if (action.type === actionTypes.SET_LOAD_TRUE) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === actionTypes.SET_LOAD_FALSE) {
    return {
      ...state,
      isLoading: false,
    };
  } else {
    return {
      ...state,
    };
  }
};
