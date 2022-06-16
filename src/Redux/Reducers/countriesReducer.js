import {
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAIL,
    SET_PRODUCTS
  } from "../Actions/actionTypes";
  
  // Initial State
  const initialState = {
    products: [
      {
        id: 1,
        title: "Jagan",
        category: "Developer"
      }
    ],
    error: "",
    isLoading: false
  };
  // console.log("---contriess---", initialState.contriess)
  
  // Reducer
  const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COUNTRIES_REQUEST:
        return { ...state, isLoading: true };
      case SET_PRODUCTS:
            return { isLoading: false, products: action.data, error: "" };
      case FETCH_COUNTRY_FAIL:
            return { isLoading: false, products: [], error: action.data };
      default:
        return state;
    }
  };
  export default countriesReducer;