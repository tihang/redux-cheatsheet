import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import cakeReducer from './cakes/cakeReducer';
import cookieReducer from './cookies/cookieReducer';
import userReducer from './users/userReducer';

const rootReducer = combineReducers({
  cakes: cakeReducer,
  cookies: cookieReducer,
  user: userReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
