import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../ACTIONS/CartAction"
import { deleteFromCart } from "../ACTIONS/CartAction"
import CheckOutComponent from "../COMPONENTS/CheckOutComponent"
import { EmptyCartScreen } from "./EmptyCartScreen"






const CartScreen = () => {
    const dispatch = useDispatch()

    const cartState = useSelector(state => state.addToCartReducer)
    
    const cartitems = cartState.cartItems
    const subtotal = cartitems.reduce((x, item) => x + item.price, 0)
    
    const cartitemstate = useSelector(state => state.addToCartReducer)
    const { cartItems } = cartitemstate

   


    return (
        <div>

            <div className="row justify-content-center cart_screen">

                <div className="col-md-5">
                    <h2 style={{ fontSize: "35px", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>My Cart</h2>


                    {/* <h2 style={{ fontSize: "35px", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" ,display:"block"}}>My Cart</h2> */}
                    {
                        (cartItems.length === 0 ? <EmptyCartScreen /> :
                            cartItems.map(item => {


                                return <div className="flex-container  border-dark m-2 p-2 cart-orderd">

                                    <div className="text-left m-1">
                                        <p className="cart_item_name">{item.name} [{item.varient}]</p>
                                        <p className="cart_item_price">Price: {item.quantity} * {item.prices[0][item.varient]} =  {item.price} </p>
                                        <p>Quantity: <i class="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}>
                                        </i>  {item.quantity}
                                            <i class="fa fa-plus m-2" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i></p>


                                    </div>


                                    <div className="ms-auto pt-3 ">
                                        <img src={item.image} alt="" style={{ height: "80px", width: "80px" }}></img>

                                    </div>



                                    <div className="mt-5 me-4 ms-4">
                                        <i class="fa fa-trash" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }} ></i>
                                    </div>

                                </div>

                            })



                        )
                    }

                    <div className=" ">

                        <h2 className="border p-2 cart_subtotal">SubTotal : {subtotal} /-</h2>
                        {/* <button className="pay-btn">Payment</button> */}
                        




                            <CheckOutComponent subtotal={subtotal}  />



                        
                    </div>

                </div>



            </div>



        </div >
    )




}
export default CartScreen