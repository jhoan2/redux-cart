import shopppingReducer from './Shopping/shopping-reducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    shop: shopppingReducer 
});

export default rootReducer;