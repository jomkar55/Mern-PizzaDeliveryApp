import axios from "axios"
import PizzaList from "../SCREENS/PizzaList"

export const getAllPizzas = () => async dispatch => {

    dispatch({ type: "GET_PIZZAS_REQUEST" })

    try {
        const response = await axios.get('http://localhost:3009/getAllPizzas')
        console.log(response)
        dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "GET_PIZZAS_FAILED", payload: error })
    }



}


// 


export const AddPizzas = (pizza) => async dispatch => {


    dispatch({ type: "ADD_PIZZA_REQUEST" })

    try {
        const response = await axios.post('http://localhost:3009/addpizza', pizza)
        // console.log(response)
        dispatch({ type: "ADD_PIZZA_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "ADD_PIZZA_FAILED", payload: error })
    }

}



// 




export const filterPizzas = (search, category) => async dispatch => {

    dispatch({ type: "GET_PIZZAS_REQUEST" })
    var filter;

    try {
        const response = await axios.get('http://localhost:3009/getAllPizzas')
        filter = response.data.filter((pizza) => pizza.name.toLowerCase().includes(search))


        if (category != "all") {
            filter = response.data.filter((pizza) => pizza.category.toLowerCase() == category)

        }

        dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filter })
    }
    catch (error) {
        dispatch({ type: "GET_PIZZAS_FAILED", payload: error })
    }



}


// 

export const getPizzaByIdAction =(id)=>async dispatch =>{

    
    dispatch({ type: "GET_PIZZA_ID_REQUEST" })

    try {
        const response = await axios.post('/getpizza-id', {id})
       console.log(response.data)
        dispatch({ type: "GET_PIZZA_ID_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "GET_PIZZA_ID_FAILED", payload: error })
    }

}


export const UpdatePizzaByIdAction =(id)=>async dispatch =>{

    
    dispatch({ type: "UPDATE_PIZZAS_REQUEST" })

    try {
        const response = await axios.post(`http://localhost:3009/update`,{id})
        console.log(response)
        dispatch({ type: "UPDATE_PIZZAS_SUCCESS", payload: response.data })
    }
    catch (error) {
        dispatch({ type: "UPDATE_PIZZAS_FAILED", payload: error })
    }

}



export const DeletePizza =(id)=> async dispatch=>{

    try{
        const response = await axios.delete('http://localhost:3009/deletepizza',{id})
        alert("pizza Deleted Successfully")
        console.log(response)
        // window.location.reload()
        
    }
    catch(error){
        alert("something Went Wrong")
        console.log(error)

    }

}


