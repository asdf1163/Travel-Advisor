import { combineReducers } from "redux";
import cakeReducer from "./recipe/recipesReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    user: userReducer
})

export default rootReducer