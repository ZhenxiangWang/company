import { combineReducers } from "redux";
import AppReducer from "./components/app/reducer";

export default combineReducers({
  app: AppReducer,
});
