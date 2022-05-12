import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import { LogOutUser } from "../ACTIONS/UserAction"
import { useEffect } from "react"
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import StyledBadge from '@mui/material/Badge';
import { margin } from "@mui/system"
import { RotateLeft } from "@mui/icons-material"



const NavbarComponent = () => {

    const cartState = useSelector(state => state.addToCartReducer)
    const userstate = useSelector(state => state.LoginUserReducer)
    const dispatch = useDispatch()



    const { currentUser } = userstate;




    return (
        <div>
            <Navbar variant="dark" className="  nav-bar-main">
                <Container className="nav-logo">
                    <Navbar.Brand className="nav-brand" href="/"><LocalPizzaIcon className="pizza-icon" />Pizza <br /><span style={{ color: "#fac564", fontSize: "10px" }}>DELICIOUS</span></Navbar.Brand>
                    <Nav className="ml-auto nav-bar justify-content-center" >
                        <ul className="navbar-nav nav-logo" >

                            {currentUser ? currentUser.isAdmin ? <Nav >
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title={currentUser.name}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#" onClick={() => { dispatch(LogOutUser()) }}><li>LogOut</li></NavDropdown.Item>
                                    <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                                    <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                                </NavDropdown>
                            </Nav> :<Nav >
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title={currentUser.name}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#" onClick={() => { dispatch(LogOutUser()) }}><li>LogOut</li></NavDropdown.Item>
                                    <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                                </NavDropdown>
                            </Nav> :
                                <li><Nav.Link href="/login">Login</Nav.Link></li>

                            }


                            <Nav.Link href="/cart" className="nav-link">
                                <StyledBadge badgeContent={cartState.cartItems.length} color="primary">
                                    <AddShoppingCartOutlinedIcon />
                                </StyledBadge>
                            </Nav.Link>


                        </ul>


                    </Nav>
                </Container>
            </Navbar>


        </div>
    )

}

export default NavbarComponent