import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import clothingReducer from "./clothingReducer";

const reducer = combineReducers({
  clothing: clothingReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
