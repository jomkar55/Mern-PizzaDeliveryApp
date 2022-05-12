export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {

    switch (action.type) {
        case "GET_PIZZAS_REQUEST":

            return { loading: true, ...state }


        case "GET_PIZZAS_SUCCESS":

            return { loading: false, pizzas: action.payload }

        case "GET_PIZZAS_FAILED":

            return { loading: false, error: action.payload }

        default: return state
    }
}




export const AddPizzaReducer = (state = { pizzas: [] }, action) => {

    switch (action.type) {
        case "ADD_PIZZA_REQUEST":

            return { loading: true, ...state }


        case "ADD_PIZZA_SUCCESS":

            return { loading: false, pizzas: action.payload }

        case "ADD_PIZZA_FAILED":

            return { loading: false, error: action.payload }

        default: return state
    }
}


export const UpdatePizzaByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case "UPDATE_PIZZAS_REQUEST":

            return { uloading: true, ...state }


        case "UPDATE_PIZZAS_SUCCESS":

            return { uloading: false, usuccess:true ,upizza: action.payload }

        case "UPDATE_PIZZAS_FAILED":

            return { uloading: false, uerror: action.payload }

        default: return state
    }
}


export const getPizzaByIdReducer = (state = { }, action) => {

    switch (action.type) {
        case "GET_PIZZA_ID_REQUEST":

            return { loading: true, ...state }


        case "GET_PIZZA_ID_SUCCESS":

            return { loading: false,success:true, pizza: action.payload }

        case "GET_PIZZA_ID_FAILED":

            return { loading: false, error: action.payload }

        default: return state
    }
}
