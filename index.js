const { createStore } = require("redux");

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const INCREMENT_COUNTER_BY_VALUE = "increment_counter_by_value";

// initial state

const initialCounter = {
  count: 0,
};
// action type, payload
const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_COUNTER_BY_VALUE,
    payload: value,
  };
};

// reducer(pure function)->always return output after getting input

const countReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      if (state.count == 0) {
        return {
          ...state,
          count: 0,
        };
      } else {
        return {
          ...state,
          count: state.count - 1,
        };
      }
    case INCREMENT_COUNTER_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };
      Default: state;
  }
};

//store - getStare(), dispatch(), subscribe()

// create store

const store = createStore(countReducer);

// subscribe for get/view

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(decrement());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));
store.dispatch(reset());
store.dispatch(incrementCounterByValue(10));
