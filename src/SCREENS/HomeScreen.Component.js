import React from "react";
import PizzaComponent from "../COMPONENTS/Pizza.Component";
// import pizzas from "../PizzaData";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../ACTIONS/PizzaActions";
import { getAllPizzasReducer } from "../REDUCERS/PizzaReducer";
import LoadingComponent from "../COMPONENTS/Loading.Component";
import ErrorComponent from "../COMPONENTS/Error.Component";
import FilterPizza from "../COMPONENTS/Filter.Component";
import FooterScreen from "./FooterScreen";



const HomeScreen = () => {

    const dispatch = useDispatch()

    const selector = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = selector

    useEffect(() => {

        dispatch(getAllPizzas())

    }, [])

    return (

        <div className="row justify-content-center pizza_comp">
            <div className="container">

                <FilterPizza />
            </div>

            {loading ? (<LoadingComponent />) : error ? (<ErrorComponent error="Something Went Wrong" />) : (
                pizzas.map((pizza, index) => {

                    return (

                        <div className="col-md-4  p-2 " key={index} >

                            <div>
                                <PizzaComponent pizza={pizza} />
                            </div>

                        </div>

                    )

                })
            )}


            <FooterScreen/>
        </div>
    )

}

export default HomeScreen;