import * as types from '../actions/types';

const initialState = {
  isAuthorized: false,
  themeMode: 'light'
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    default:
      return state;
  }
};

export default appReducer;