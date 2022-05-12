import { Modal, Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../ACTIONS/CartAction";



const PizzaComponent = ({ pizza }) => {

    const [varient, setvarient] = useState("small");
    const [quantity, setquantity] = useState(1)
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const addtocart = () => {
        dispatch(addToCart(pizza, quantity, varient))
    }


    return (
        <div className="pizza-h1 shadow p-3 mb-5  rounded each_pizza" >

            <div onClick={handleShow}>

                <h3 >{pizza.name}</h3>
                <img src={pizza.image} width="200" ></img>
            </div>

            <div className="flex-container" >

                <div className="w-100 m-1">
                    <p>Varient</p>
                    <select className="form-control" value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {pizza.varients.map((varient) => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>


                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => { setquantity(e.target.value) }}>

                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>

            </div>

            <div className="flex-container">

                <div className="m-1 w-100">

                    <h3 className="price" >Price : {pizza.prices[0][varient] * quantity}</h3>

                </div>

                <div className="m-1 w-100">

                    <button className="btn" onClick={addtocart}>ADD to Cart</button>

                </div>


            </div>




            <Modal show={show} className="text-center ">
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <img src={pizza.image} alt="" lassName="img-fluid"></img>
                    <p>Dsescription : {pizza.description}</p>


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    {/* <Button variant="primary">Save changes</Button> */}
                </Modal.Footer>
            </Modal>




        </div>

    )

}

export default PizzaComponent;