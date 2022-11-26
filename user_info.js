//payload action

const { createStore } = require("redux");

const ADD_USER = "ADD_USER";

const initialUserState = {
  count: 0,
  user: ["Sm"],
};

const userAddAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      break;
  }
};

const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(userAddAction("Al-Amin"));
store.dispatch(userAddAction("Piash"));
