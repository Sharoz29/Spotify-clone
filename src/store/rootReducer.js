import { combineReducers } from "redux";
import { userInfoReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  userInfoReducer: userInfoReducer,
});
