import { combineReducers } from "redux";
import { productreducer, selectProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productreducer,
    product: selectProductReducer 
})
export default reducers