import { legacy_createStore } from 'redux';
import todoReducer from "./Reducer/todoListReducer"

  const store = legacy_createStore(todoReducer);

  export default store;
