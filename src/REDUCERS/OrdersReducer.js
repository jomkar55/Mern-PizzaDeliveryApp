
import React from 'react';




export const PlaceOrdersReducer = (state = {}, action) => {

    switch (action.type) {
        case "PLACE_ORDER_REQUEST":
            return {
                loading: true
            }

        case "PLACE_ORDER_SUCCESS":
            return {
                loading: false,
                success: true,
            
            }

        case "PLACE_ORDER_FAILED":
            return {
                loading: false,
                error: action.payload

            }
        default: return state



    }
};


export const getAllUserOrdersReducer = (state = { orders: [] }, action) => {

    switch (action.type) {
        case "GET_ALL_ORDERS_REQUEST":

            return { loading: true, ...state }


        case "GET_ALL_ORDERS_SUCCESS":

            return { loading: false, orders: action.payload }

        case "GET_ALL_ORDERS_FAILED":

            return { loading: false, error: action.payload }

        default: return state
    }
}

// list of orders Admin pannel
export const AllOrdersReducer = (state = { orders: [] }, action) => {

    switch (action.type) {
        case "ALL_ORDERS_REQUEST":

            return { loading: true, ...state }


        case "ALL_ORDERS_SUCCESS":

            return { loading: false, orders: action.payload }

        case "ALL_ORDERS_FAILED":

            return { loading: false, error: action.payload }

        default: return state
    }
}