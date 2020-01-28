const redux = require("redux");
const logger = require("redux-logger").createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_COOKIE = "BUY_COOKIE";

function buyCake(num) {
  return {
    type: BUY_CAKE,
    num
  };
}

function buyCookie(num) {
  return {
    type: BUY_COOKIE,
    num
  };
}

const initialCookieState = {
  numofCookies: 20
};

const cookieReducer = (state = initialCookieState, action) => {
  switch (action.type) {
    case BUY_COOKIE:
      return {
        ...state,
        numofCookies: state.numofCookies - action.num
      };

    default:
      return state;
  }
};

const initialCakeState = {
  numOfCakes: 10
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.num
      };
    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  cookie: cookieReducer
});
const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));

console.log("Initial state ", store.getState());
// const unsubscribe = store.subscribe(_ =>
//   console.log("Updated state ", store.getState())
// );
store.dispatch(buyCake(2));
store.dispatch(buyCookie(2));
// unsubscribe();
