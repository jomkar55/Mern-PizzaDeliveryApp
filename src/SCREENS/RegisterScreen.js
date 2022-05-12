import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RegisterUser } from "../ACTIONS/UserAction";
import ErrorComponent from "../COMPONENTS/Error.Component";
import LoadingComponent from "../COMPONENTS/Loading.Component";
import SuccessComponent from "../COMPONENTS/Success.Component"





const RegisterScreen = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [address, setaddress] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const registerState = useSelector(state => state.RegisterUserReducer)
    const { error, loading, success } = registerState

    const dispatch = useDispatch()




    function register() {

        if (password !== cpassword) {
            alert('Password Not Match')
        }
        else {
            const user = {
                name,
                email,
                number,
                address,
                password
            }

            console.log(user)
            dispatch(RegisterUser(user))
        }
    }



    return (
        <div>
            <div className="row justify-content-center mt-5 ">

                <div className="col-md-5 mt-5 shadow p-2 mb-5 bg-white rounded bg-dark" >

                    {success && (<SuccessComponent success="User Register Successfully" />)}
                    {loading && (<LoadingComponent />)}
                    {error && (<ErrorComponent error="Enter The Fields " />)}
                    <h2 className="m-4">REGISTRATION</h2>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                                Name :
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => { setname(e.target.value) }} required />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email :
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumber">
                            <Form.Label column sm="2">
                                Number :
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Phone Number" value={number} onChange={(e) => { setnumber(e.target.value) }} required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                            <Form.Label column sm="2">
                                ADD :
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Address" value={address} onChange={(e) => { setaddress(e.target.value) }} required />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Password :
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Confirm Password :
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Confirm Password" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} required />
                            </Col>
                        </Form.Group>


                        <Link to="/login">
                            <button className="btn" onClick={register}>Register</button>
                        </Link>

                        <div className="m-2 p-1" >
                            <a href="/login" style={{ textDecoration: "none", fontSize: "18px", fontFamily: "sans-serif", color: "blue" }}>Click Here To Login</a>
                        </div>


                    </Form>




                </div>



            </div>


        </div>
    )

}

export default RegisterScreen;



