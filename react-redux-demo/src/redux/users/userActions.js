import Axios from 'axios';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_CREATE_POST,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes';

export const userLogin = () => ({
  type: USER_LOGIN,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userCreatePost = (post) => ({
  type: USER_CREATE_POST,
  payload: post,
});

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchUsersFailure(errorMsg));
    });
};
