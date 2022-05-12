import React from "react";
import { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../ACTIONS/UserAction";
import ErrorComponent from "../COMPONENTS/Error.Component";
import LoadingComponent from "../COMPONENTS/Loading.Component";



const LoginScreen = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()

    const loginState = useSelector(state => state.LoginUserReducer)
    const { error, loading } = loginState

    useEffect(() => {

        if (localStorage.getItem("currentUser")) {
            window.location.href = "/"
        }

    }, [])


    function login() {
        const user = { email, password }
        dispatch(LoginUser(user))

    }

    return (
        <div>
            <div className="row justify-content-center mt-5">

                <div className="col-md-5 mt-5 shadow p-2 mb-5 bg-white rounded bg-dark">

                    {loading && (<LoadingComponent />)}
                    {error && (<ErrorComponent error="Invalid Credentials" />)}

                    <h2 className="m-4">LOGIN</h2>

                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email :
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password :
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                            </Col>
                        </Form.Group>

                        <button className="btn" onClick={login}>Login</button>

                        <div className="m-2 p-1" >
                            <a href="/register" style={{ textDecoration: "none", fontSize: "18px", fontFamily: "sans-serif", color: "blue" }}>Click Here To Register</a>
                        </div>

                    </Form>


                </div>

            </div>
        </div>
    )

}

export default LoginScreen;