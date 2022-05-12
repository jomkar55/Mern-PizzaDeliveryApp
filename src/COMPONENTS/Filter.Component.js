import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../ACTIONS/PizzaActions";


const FilterPizza = () => {

    const dispatch = useDispatch()
    const [search, setsearch] = useState('')
    const [category, setcategory] = useState('all')


    const filter = () => {

        dispatch(filterPizzas(search, category))

    }




    return (
        <div className="container ">

            <div className="row justify-content-center  shadow p-3 mb-5 bg-white rounded filter-container">

                <div className="col-md-3  mt-2">
                    <input value={search} type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Name Your Pizza ..." className="Filter_input"></input>
                </div>
                <div className="col-md-3  mt-2" >
                    <select value={category} className="for-control w-50 Filter_input" onChange={(e) => { setcategory(e.target.value) }} >
                        <option value="all">ALL</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non-Veg</option>
                    </select>

                </div>

                <div className="col-md-3  ">

                    <button className="btn   w-100 mt-2" onClick={filter}>Filter</button>
                </div>



            </div>
        </div>
    )


}

export default FilterPizza;