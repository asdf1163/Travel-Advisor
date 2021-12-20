import { combineReducers } from "redux";
import { usersReducer } from "./usersList/userReducer";
import { singleUserReducer } from "./singleUser/singleUserReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  singleUser: singleUserReducer,
});

export default rootReducer;
