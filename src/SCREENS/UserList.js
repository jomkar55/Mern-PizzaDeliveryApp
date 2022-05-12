import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser, GetAllUserAction } from '../ACTIONS/UserAction';

import LoadingComponent from "../COMPONENTS/Loading.Component";
import ErrorComponent from "../COMPONENTS/Error.Component";
import { Link } from 'react-router-dom';



function UserList() {

    const dispatch = useDispatch()
    const selector = useSelector((state) => state.GetAllUserReducer)
    const { users, error, loading } = selector


    useEffect(() => {

        dispatch(GetAllUserAction())


    }, [])



    return (
        <div >
            {loading && (<LoadingComponent />)}
            {error && (<ErrorComponent error="something Went Wrong" />)}
            <h4>User list</h4>

            <table className="table table-bordered">

                <thead className='table-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>


                <tbody>
                    {

                        users.map((user ,index) => {
                            return <>

                                <tr key={index}>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.number}</td>
                                    <td>{user.address}</td>

                                    <td> 
                                        
                                        <i className="fa fa-trash" style={{ margin: "0px 10px" }}   onClick={() => dispatch(DeleteUser(user))}></i>
                                       
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

export default UserList;
