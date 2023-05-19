import * as types from '../actions/types';

const roleKey = 'user_role';
const role = JSON.parse(localStorage.getItem(roleKey));
const initialState = {
  isAuthorized: !!role,
  role: role,
  isDrawerOpen: false,
  themeMode: 'light',
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_USER_LOGOUT:
      localStorage.removeItem(roleKey);
      return {
        ...state,
        isAuthorized: false,
        role: ''
      }
    case types.SET_USER_LOGEDIN:
      localStorage.setItem(roleKey, JSON.stringify(payload))
      return {
        ...state,
        isAuthorized: true,
        role: payload
      }
    default:
      return state;
  }
};

export default appReducer;