import {combineReducers, createStore, applyMiddleware} from "redux";
import laptopReducer from "./Reducers/laptopReducer";
import mobileReducer from "./Reducers/mobileReducer";
import usersReducer from "./Reducers/usersReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const rootReducer = combineReducers({
    laptops: laptopReducer,
    mobiles: mobileReducer,
    users: usersReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk,logger));
export default store;
