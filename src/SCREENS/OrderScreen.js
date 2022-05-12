import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserOrdersAction } from '../ACTIONS/Orders.Action';

import ErrorComponent from "../COMPONENTS/Error.Component";
import LoadingComponent from "../COMPONENTS/Loading.Component";

const OrderScreen = () => {

    const dispatch = useDispatch()

    const orderstate = useSelector(state => state.getAllUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {

        dispatch(getAllUserOrdersAction())

    }, [])




    return (

        <div className='container '>
            <h2>My Orders </h2>

            {loading && (<LoadingComponent />)}
            {error && (<ErrorComponent error="Something Went Wrong" />)}
            {orders &&

                orders.map((order,index) => {
                    return (
                        <div className='flex-container m-2 p-2 order_screen' key={index}>
                            <div className='text-left w-100 m-1 '>
                                <h4>Items</h4>
                                {
                                    order.orderItems.map((items , index) => {
                                        return (

                                            <div key={index}>
                                                <p>

                                                    {items.name} [{items.varient}] * {items.quantity} = {items.price}
                                                </p>
                                            </div>

                                        )
                                    })
                                }
                            </div>

                            <div className='text-left w-100 m-1'>
                            <h4>Address</h4>

                                <p>Sreet : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                            </div>

                            <div className='text-left w-100 m-1'>
                            <h4>Order Info</h4>

                                <p>Order Amount :{order.orderAmount}</p>
                                <p>Date :{order.createdAt.substring(0,10)}</p>
                                <p>Transaction ID : {order.transactionId}</p>
                                <p>Order Id :{order._id}</p>


                            </div>




                        </div>
                    )


                })

            }




        </div >
    );
};

export default OrderScreen;