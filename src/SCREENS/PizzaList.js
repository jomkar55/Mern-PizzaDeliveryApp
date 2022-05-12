

import LoadingComponent from "../COMPONENTS/Loading.Component";
import ErrorComponent from "../COMPONENTS/Error.Component";
import FilterPizza from "../COMPONENTS/Filter.Component";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { DeletePizza, getAllPizzas } from "../ACTIONS/PizzaActions";
import { Link, NavLink } from "react-router-dom";


function PizzaList() {

    const dispatch = useDispatch()

    const selector = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = selector

    useEffect(() => {

        dispatch(getAllPizzas())

    }, [])


    return (
        <div>
            <p> Pizzas list</p>

            {loading && (<LoadingComponent />)}
            {error && (<ErrorComponent error="something Went Wrong" />)}

            <table className="table table-bordered">

                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pizzas.map((pizza, index) => {


                            return <>
                               

                                    <tr >
                                        <td>{pizza.name}</td>
                                        <td>

                                            small:{pizza.prices[0]['small']}<br />
                                            medium:{pizza.prices[0]['medium']}<br />
                                            large:{pizza.prices[0]['large']}

                                        </td>
                                        <td>{pizza.category}</td>
                                        <td>

                                            <i className="fa fa-trash" style={{ margin: "0px 10px" }} onClick={()=>dispatch(DeletePizza(pizza))}></i>
                                            <NavLink to={`/admin/editpizza/${pizza._id}`}>
                                                <i className="fa fa-edit" style={{ margin: "0px 10px" }}></i>
                                            </NavLink>


                                        </td>

                                    </tr>
                               

                            </>

                        })
                    }

                </tbody>


            </table>








        </div>
    );
}

export default PizzaList;