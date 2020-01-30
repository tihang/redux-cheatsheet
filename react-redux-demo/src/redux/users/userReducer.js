import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_CREATE_POST,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes';

const initialState = {
  loggedIn: false,
  posts: [],
  isLoading: false,
  users: [],
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };

    case USER_CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: '',
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
