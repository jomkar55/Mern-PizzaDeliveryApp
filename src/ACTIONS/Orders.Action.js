

import axios from "axios";

export const PlaceOrdersAction = (token, subtotal) => async(dispatch, getState) => {

    dispatch({ type: "PLACE_ORDER_REQUEST" })
    const currentUser = getState().LoginUserReducer.currentUser
    const cartItems = getState().addToCartReducer.cartItems


    try {
        const response = await axios.post('http://localhost:3009/placeorders', { token, subtotal, currentUser, cartItems })
        console.log(response)
        dispatch({ type: "PLACE_ORDER_SUCCESS" })


    }
    catch (error) {
        console.log(error)
    dispatch({type:"PLACE_ORDER_FAILED" })

    }


}


export const getAllUserOrdersAction = () => async (dispatch ,getState) => {

    dispatch({ type: "GET_ALL_ORDERS_REQUEST" })
    const currentUser = getState().LoginUserReducer.currentUser

    try {
        const response = await axios.post('http://localhost:3009/getalluserorders',{userid:currentUser._id})
        console.log(response)
        dispatch({ type: "GET_ALL_ORDERS_SUCCESS", payload: response.data})
    }
    catch (error) {
        dispatch({ type: "GET_ALL_ORDERS_FAILED", payload: error })
    }



}

// Orders list Admin pannel

export const AllOrdersAction = () => async (dispatch ) => {

    dispatch({ type: "ALL_ORDERS_REQUEST" })
 
    try {
        const response = await axios.get('http://localhost:3009/allorders')
        console.log(response)
        dispatch({ type: "ALL_ORDERS_SUCCESS", payload: response.data})
    }
    catch (error) {
        dispatch({ type: "ALL_ORDERS_FAILED", payload: error })
    }



}


