import { combineReducers } from "redux";
import { productreducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productreducer
})
export default reducers