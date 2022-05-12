import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import { BrowserRouter, Link, Routes, Route, useRoutes } from "react-router-dom";
import { Switch } from "react-router";


import AddPizza from "./AddPizza";
import Orders from "./Orders";
import PizzaList from "./PizzaList";
import UserList from "./UserList";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EditPizzaScreen from "./EditPizzaScreen";






const AdminScreen = () => {


    const userstate = useSelector(state => state.LoginUserReducer)
    // const dispatch = useDispatch()

    const { currentUser } = userstate;

    useEffect(() => {

        if (!currentUser.isAdmin) {
            window.location.href = "/";
        }

    })


    return (
        <div className="container">


            <div className=" row justify-content-center">
                <div>

                    <h2 style={{ padding: "10px", fontFamily: "serif" }}>Admin Pannel</h2>



                    <Tabs >
                        <TabList style={{ backgroundColor: "blue", color: "white", fontSize: "18px", margin: "10px", fontFamily: "sans" }}>
                            <Tab style={{ padding: "10px", margin: "0px 20px" }}>User List</Tab>
                            <Tab style={{ padding: "10px", margin: "0px 20px" }}>Pizza List</Tab>
                            <Tab style={{ padding: "10px", margin: "0px 20px" }}>Add Pizzas List</Tab>
                            <Tab style={{ padding: "10px", margin: "0px 20px" }}>Orders List</Tab>
<Tab></Tab>
                        </TabList>

                        <TabPanel>
                            <UserList />
                        </TabPanel>
                        <TabPanel>
                            <PizzaList />
                        </TabPanel>
                        <TabPanel>
                            <AddPizza />
                        </TabPanel>
                        <TabPanel>
                            <Orders />
                        </TabPanel>
                        

                        <TabPanel>

                                
                                    <EditPizzaScreen />
                            
                        </TabPanel>
                            


                    </Tabs>









                    {/* 
                    <ul className="admin-panel-nav">

                        <li><a href='/admin/User-List'>Users List</a> </li>

                        <li><Link to={'admin/User-List'}>Users List</Link> </li>
                        <li><Link to='/pizzalist'>Pizzas List</Link></li>
                        <li><Link to='/addpizza'>Add Pizzas List</Link></li>
                        <li><Link to='/orderlist'>Orders List</Link></li>

                    </ul>



                    <Routes>
                        <Route element={<AdminScreen />}>

                            <Route exact path='/admin' element={<UserList />} />

                            <Route path='/admin/User-List' element={<UserList />} exact />
                            <Route path='/pizzalist' element={<PizzaList />} exact />
                            <Route path='/addpizza' element={<AddPizza />} exact />
                            <Route path='/orderlist' element={<Orders />} exact />

                        </Route>
                    </Routes>

 */}






















                </div>


            </div>

        </div >
    )



}


export default AdminScreen