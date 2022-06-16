import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import { reducer as formReducer } from 'redux-form'
import laptopReducer from "./Reducers/laptopReducer";
import mobileReducer from "./Reducers/mobileReducer";
import usersReducer from "./Reducers/usersReducer";
import countriesReducer from "./Reducers/countriesReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const rootReducer = combineReducers({
    laptops: laptopReducer,
    mobiles: mobileReducer,
    users: usersReducer,
    allProducts: countriesReducer,
    form: formReducer,
})
const store = createStore(rootReducer,  {},  compose(
        applyMiddleware(
        thunk,
        logger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
export default store;
