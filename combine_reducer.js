//product reducer
//cart reducer

const { createStore, combineReducers } = require("redux");

// CONSTANTS for products
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// CONSTANTS for cart
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

//initial state for product
const initialProductState = {
  products: ["sugar", "salt"],
  numberofProducts: 2,
};

//initial state for cart
const initialCartState = {
  cart: [],
  numberofProducts: 0,
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

//action for cart
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCart = (product) => {
  return {
    type: ADD_CART_ITEM,
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

// cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};

// combine reducer
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

//store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addCart("pen"));
store.dispatch(addCart("brush"));
store.dispatch(addProduct("pen"));
