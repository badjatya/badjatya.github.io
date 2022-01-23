// IMPORTING Redux
import { combineReducers, createStore } from "redux";

// IMPORTING Redux reducers
import styleReducer from "./reducers/style.reducer";

// Combing Reducer and creating Store
const rootReducer = combineReducers({
  styles: styleReducer,
});

const store = createStore(rootReducer);

export default store;
