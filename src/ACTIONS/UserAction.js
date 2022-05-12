
import axios from "axios";




export const RegisterUser = (user) => async dispatch => {

    dispatch({ type: "USER_REGISTER_REQUEST" })

    try {
        const response = await axios.post('http://localhost:3009/api/users/register', user)
        dispatch({ type: "USER_REGISTER_SUCCESS" })
        console.log(response)

    }
    catch (error) {
        dispatch({ type: "USER_REGISTER_FAILED", payload: error })


    }

}




export const LoginUser = (user) => async dispatch => {

    dispatch({ type: "USER_LOGIN_REQUEST" })

    try {
        const response = await axios.post('http://localhost:3009/login', user)
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = "/"

    }
    catch (error) {
        dispatch({ type: "USER_LOGIN_FAILED", payload: error })


    }

}


export const LogOutUser = (user) => dispatch => {

    localStorage.removeItem('currentUser')
    window.location.href = "/login"

}


export const GetAllUserAction = (user)=> async dispatch=>{

    dispatch({type:"GET_ALL_USER_REQUEST"})

    try{
        const response =await axios.get("http://localhost:3009/allusers", user)
        dispatch({type:"GET_ALL_USER_SUCCESS",payload:response.data } )
    }
    catch(error){

        dispatch({type:"GET_ALL_USER_FAILED" , payload:error})
    }


}



export const DeleteUser =(id)=> async dispatch=>{

    try{
        const response = await axios.post('/deleteuser' ,{id})
        alert("User Deleted Successfully")
        console.log(response)
        window.location.reload()
       
        
    }
    catch(error){
        alert("something Went Wrong")
        console.log(error)

    }

}




