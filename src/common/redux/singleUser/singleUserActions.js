import { getUsers } from "../../APIs/recipesApi";
import {
  FETCH_SINGLE_USERS_REQUEST,
  FETCH_SINGLE_USERS_SUCCESS,
  FETCH_SINGLE_USERS_FAILURE,
} from "./singleUserTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_SINGLE_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_SINGLE_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_SINGLE_USERS_FAILURE,
    payload: error,
  };
};

export const fetchSingleUser = (id) => {
  return (dispatch) => {
    getUsers("/" + id)
      .then((response) => {
        const users = response.data;
        console.log(users);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
