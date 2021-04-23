import {
    BUY_LAPTOP,
    BUY_MOBILE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL
  } from "./actionTypes";
import axios from "axios";

export const buyLaptop=()=>{
    return {
        type:BUY_LAPTOP
    }
}
export const buyMobile=()=>{
    return {
        type:BUY_MOBILE
    }
}
// Fetch users request Action
export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    };
  };
  // Fetch users success Action
  export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCESS,
      data: users
    };
  };
  // Fetch users fail Action
  export const fetchUsersFail = error => {
    return {
      type: FETCH_USERS_FAIL,
      data: error
    };
  };

  // Fetch users flow Action
export const fetchUsers = () => {
    return function(dispatch) {
      dispatch(fetchUsersRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          let users = response.data.map(user => user.id);
          dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
          dispatch(fetchUsersFail(error));
        });
    };
  };