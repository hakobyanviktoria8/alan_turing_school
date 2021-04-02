import { combineReducers } from "redux";
import filesReducer from './reducers/filesReducer';

export const rootReducer = combineReducers({
  files: filesReducer,
});