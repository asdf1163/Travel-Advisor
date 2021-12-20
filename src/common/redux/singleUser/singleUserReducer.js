import {
  FETCH_SINGLE_USERS_REQUEST,
  FETCH_SINGLE_USERS_SUCCESS,
  FETCH_SINGLE_USERS_FAILURE
} from "./singleUserTypes";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

export const singleUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_USERS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_SINGLE_USERS_FAILURE:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
