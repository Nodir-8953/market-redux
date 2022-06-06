import {ActionTypes} from '../constants/action-types'
const initialState = {
    products: [{
        id: 1,
        title: "John",
        category: "React Developer"
    }]
}
export const productreducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}