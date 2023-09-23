
import axios from 'axios';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGOUT = 'LOGOUT';


export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.get('https://render-dployement.onrender.com/users');
    const users = response.data;
    const user = users.find((user) => user.email === credentials.email && user.password === credentials.password);
    
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(loginSuccess(user));
    } else {
      dispatch(loginFailure('Invalid email or password.'));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('https://render-dployement.onrender.com/users', userData);
    const user = response.data;
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(signupSuccess(user));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};
