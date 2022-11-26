const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

//state initialization
const initialTodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

// action
const todosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const todosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

const todosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

// totos Reducer

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(todosRequest());
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        const todos = json;
        const title = todos.map((todo) => todo.title);
        dispatch(todosSuccess(title));
      })
      .catch((error) => {
        dispatch(todosFailed(error.message));
      });
  };
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
