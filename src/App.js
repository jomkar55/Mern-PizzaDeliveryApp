import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NavbarComponent from './COMPONENTS/NavbarComponent';
import HomeScreen from './SCREENS/HomeScreen.Component';
import CartScreen from './SCREENS/CartScreen'
import LoginScreen from './SCREENS/LoginScreen';
import RegisterScreen from './SCREENS/RegisterScreen';
// import AdminScreen from './SCREENS/AdminScreen';
import "bootstrap"
import UserList from './SCREENS/UserList';

import AdminScreen from './SCREENS/AdminScreen';
import EditPizzaScreen from './SCREENS/EditPizzaScreen';
import NewHomeScreen from './SCREENS/NewHomeScreen';
import OrderScreen from './SCREENS/OrderScreen';








function App() {
  return (
    <div className="App ">

      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewHomeScreen />} />
          <Route path='/homescreen' element={<HomeScreen />} />

          <Route path='/cart' element={<CartScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/admin' element={<AdminScreen />} />


          <Route path='/admin/editpizza/:id' element={<EditPizzaScreen />} />
          <Route path='/orders' element={<OrderScreen />} />








          <Route path='*' element={<h1>Page not found</h1>} />

        </Routes>

      </BrowserRouter>




    </div >
  );
}

export default App;