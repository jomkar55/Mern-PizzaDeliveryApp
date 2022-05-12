
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { PlaceOrdersAction } from '../ACTIONS/Orders.Action';
import ErrorComponent from "../COMPONENTS/Error.Component";
import LoadingComponent from "../COMPONENTS/Loading.Component";
import SuccessComponent from "../COMPONENTS/Success.Component"
import CartScreen from '../SCREENS/CartScreen';
import { EmptyCartScreen } from '../SCREENS/EmptyCartScreen';
const CheckOutComponent = ({ subtotal }) => {

    const selector = useSelector(state => state.PlaceOrdersReducer)
    const { loading, error, success } = selector



    const dispatch = useDispatch()

    function tokenHandler(token) {
        console.log(token)
        dispatch(PlaceOrdersAction(token, subtotal))

    }


  
  


    return (
        <div>
            {success && (<SuccessComponent success="YourOrder Placed Successfully" />)}
            {loading && (<LoadingComponent />)}
            {error && (<ErrorComponent error="Something Went Wrong" />)}


            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHandler}
                currency="INR"
                stripeKey="pk_test_51KmbupSFXtlZZBzzqInKogygXBgP3ARVAkJo303FtI3huMbYnLndWjNdAwF58KfTs5RCbSoL36F5daOp1FvncBeQ00kZHio8gu"
            
            >


                <button className="pay-btn" >Payment</button>




            </StripeCheckout>




        </div>
    );
};

export default CheckOutComponent;