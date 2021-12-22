import { combineReducers } from "redux";
import { usersReducer } from "./usersList/userReducer";
import { singleUserReducer } from "./singleUser/singleUserReducer";

const rootReducer = combineReducers({
  userList: usersReducer,
  singleUser: singleUserReducer,
});

export default rootReducer;
