import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllOrdersAction } from '../ACTIONS/Orders.Action';

import LoadingComponent from "../COMPONENTS/Loading.Component";
import ErrorComponent from "../COMPONENTS/Error.Component";





function Orders() {

const dispatch = useDispatch()
const orderstate = useSelector(state=>state.AllOrdersReducer)
const {orders,error , loading} = orderstate

useEffect(()=>{

    dispatch(AllOrdersAction())
},[])

    




    return (
        <div>

            <h4>Orders List</h4>

            {loading && (<LoadingComponent />)}
            {error && (<ErrorComponent error="something Went Wrong" />)}

            <table className="table table-bordered">

                <thead className="table-dark">
                    <tr>
                        <th>OrderId</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => {


                            return <>
                               

                                    <tr >
                                        <td>{order._id}</td>
                                        <td>{order.email}</td>
                                        <td>{order.userid}</td>
                                        <td>{order.orderAmount}</td>
                                        <td>{order.createdAt.substring(0,10)}</td>
                                        <td>status</td>

                                    </tr>
                               

                            </>

                        })
                    }

                </tbody>


            </table>



        </div>
    );
}

export default Orders;