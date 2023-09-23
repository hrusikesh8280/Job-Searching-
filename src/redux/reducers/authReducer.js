
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "../actions/authActions";


const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
