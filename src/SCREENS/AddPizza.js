import React, { useEffect, useState } from 'react';


import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddPizzas } from '../ACTIONS/PizzaActions';

import ErrorComponent from "../COMPONENTS/Error.Component";
import LoadingComponent from "../COMPONENTS/Loading.Component";
import SuccessComponent from "../COMPONENTS/Success.Component"



function AddPizza() {
    const dispatch = useDispatch()

    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')


    const addpizzaState = useSelector(state => state.AddPizzaReducer)
    const { error, loading, success } = addpizzaState


    function addPizza(e) {


        const pizza = {
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }
        dispatch(AddPizzas(pizza))
    }





    return (
        <div>

            {success && (<SuccessComponent success="User Register Successfully" />)}
            {loading && (<LoadingComponent />)}
            {error && (<ErrorComponent error="Enter The Fields " />)}
            <h5> ADD pizzas</h5>

            <Form >

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                        Name :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Pizza Name" value={name} onChange={(e) => { setname(e.target.value) }} />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                    <Form.Label column sm="2">
                        Small Price :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Small Price" value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                    <Form.Label column sm="2">
                        Medium Price :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Medium Price" value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                    <Form.Label column sm="2">
                        Large Price :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Large Price" value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextImage">
                    <Form.Label column sm="2">
                        Image:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Image Url" value={image} onChange={(e) => { setimage(e.target.value) }} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescription">
                    <Form.Label column sm="2">
                        Description :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCategory">
                    <Form.Label column sm="2">
                        Category :
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Category" value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    </Col>
                </Form.Group>


                <Button variant="outline-danger" onClick={addPizza}>Add Pizza</Button>
            </Form>

        </div >
    );
}

export default AddPizza;