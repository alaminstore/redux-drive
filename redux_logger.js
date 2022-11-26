//product reducer
//cart reducer

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// CONSTANTS for products
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

//initial state for product
const initialProductState = {
  products: ["sugar", "salt"],
  numberofProducts: 2,
};

//action for product
const getProducts = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// product Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};

//store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("pen"));
