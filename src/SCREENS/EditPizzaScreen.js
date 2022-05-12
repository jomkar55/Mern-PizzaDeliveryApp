
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPizzaByIdAction, UpdatePizzaByIdAction } from '../ACTIONS/PizzaActions';

import ErrorComponent from "../COMPONENTS/Error.Component";
import LoadingComponent from "../COMPONENTS/Loading.Component";
import SuccessComponent from "../COMPONENTS/Success.Component"
import PizzaList from './PizzaList';


function EditPizzaScreen() {

    const dispatch = useDispatch()
    const { id } = useParams()

    const selector = useSelector(state => state.getPizzaByIdReducer)
    const { pizza, error, loading ,success } = selector
   
    const selectorOne = useSelector(state => state.UpdatePizzaByIdReducer)
    const { upizza, uerror, uloading ,usuccess} = selectorOne


    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')


    useEffect(() => {

        if (pizza) {
          
            if (pizza._id === id) {
                setname(pizza.name)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])
                setimage(pizza.image)
                setdescription(pizza.description)
                setcategory(pizza.category)
            }
        } else {
            dispatch(getPizzaByIdAction(id))
        }

    }, [pizza,dispatch])


    function editPizza(e) {
        
        const editpizza = {
            _id: id,
            name:name,
            image:image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }
       
        dispatch(UpdatePizzaByIdAction(editpizza))
    }






    return (
        <div>

            <h4>Edit Pizza</h4>
            <h4>{id}</h4>

            {uloading && (<LoadingComponent />)}
            {usuccess && (<SuccessComponent success="Pizza Updated Successfully" />)}
            {uerror && (<ErrorComponent error="could not Update " />)}

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


                <Button variant="outline-danger" onClick={editPizza}>Update Pizza</Button>
            </Form>

        </div>
    );
}

export default EditPizzaScreen;