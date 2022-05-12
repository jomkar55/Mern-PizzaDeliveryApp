import express from "express"
import { AllOrders, getUserOrdersbyid, placeOrders } from "../CONTROLLER/OrdersController";

import { AddPizzas, DeletePizza, getAllPizzas, getpizzabyidPizza, UpdatePizzabyid } from "../CONTROLLER/PizzaController";

import { DeleteUser, getAllUsers, RegisterUser, UserLogin } from "../CONTROLLER/User.Controller"

const route = express.Router();

// pizzas

route.get('/getAllPizzas', getAllPizzas)
route.post('/addpizza', AddPizzas)
route.post('/getpizza-id', getpizzabyidPizza)
route.post('/update',UpdatePizzabyid)
route.delete('/deletepizza',DeletePizza)




// users

route.post('/api/users/register', RegisterUser)
route.post('/login', UserLogin)
route.get('/allusers', getAllUsers)
route.post('/deleteuser',DeleteUser)


// Orders

route.post('/placeorders',placeOrders)
route.post('/getalluserorders',getUserOrdersbyid)
route.get('/allorders',AllOrders)





export default route;