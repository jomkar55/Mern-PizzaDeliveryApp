import { applyMiddleware, combineReducers } from "redux";

import { createStore, } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { AddPizzaReducer, getAllPizzasReducer, getPizzaByIdReducer, UpdatePizzaByIdReducer } from "../REDUCERS/PizzaReducer";
import { addToCartReducer } from "../REDUCERS/CartReducers";
import { RegisterUserReducer, LoginUserReducer, GetAllUserReducer } from "../REDUCERS/UserReducer";
import { AllOrdersReducer, getAllUserOrdersReducer, PlaceOrdersReducer } from "../REDUCERS/OrdersReducer";





const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    addToCartReducer: addToCartReducer,
    RegisterUserReducer: RegisterUserReducer,
    LoginUserReducer: LoginUserReducer,
    AddPizzaReducer: AddPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    UpdatePizzaByIdReducer:UpdatePizzaByIdReducer,
    GetAllUserReducer:GetAllUserReducer,
    PlaceOrdersReducer:PlaceOrdersReducer,
    getAllUserOrdersReducer:getAllUserOrdersReducer,
    AllOrdersReducer:AllOrdersReducer,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null



const initialstate = {
    addToCartReducer: {

        cartItems: cartItems
    },
    LoginUserReducer: {
        currentUser: currentUser
    }

}

const composeEnhanchers = composeWithDevTools({})

const store = createStore(finalReducer, initialstate, composeEnhanchers(applyMiddleware(thunk)))


export default store;