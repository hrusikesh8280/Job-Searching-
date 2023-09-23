import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import jobReducer from "./reducers/jobReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  job: jobReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
