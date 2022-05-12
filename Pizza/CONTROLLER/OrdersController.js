const stripe = require('stripe')("sk_test_51KmbupSFXtlZZBzz6CosKY5XM29tBRlT78LU4ilgV9SV1JW4DddY0U3ztVD48Un8Xq8oUbHBCIh6T0ld788859wf00D8CZ5nD0");
// import Stripe from 'stripe';"sk_test_51KmbupSFXtlZZBzz6CosKY5XM29tBRlT78LU4ilgV9SV1JW4DddY0U3ztVD48Un8Xq8oUbHBCIh6T0ld788859wf00D8CZ5nD0";


import Order from '../MODEL/Order.Model';

const { v4: uuidv4 } = require('uuid');

export const placeOrders = async (req, res) => {

    const { token, subtotal, currentUser, cartItems } = req.body
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        
        const payment = await stripe.paymentIntents.create({
           
            amount: subtotal * 100,
            currency: "INR",
            customer: customer.id,
            receipt_email: token.email,
            payment_method_types: [ 'card' ]
           

        }, {
            idempotencyKey: uuidv4()
        })
        

        if (payment) {

            const newOrder = new Order({
                name:currentUser.name,
                email:currentUser.email,
                userid:currentUser._id,
                orderItems:cartItems,
                orderAmount:subtotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    contry:token.card.address_country,
                    pincode:token.card.address_zip
                },
                transactionId:token.card.id
            })

            newOrder.save()



            res.send("order placed Successfully ")
        }
        else {
            res.send("Payment Failed")
        }

    }
    catch (error) {

        return res.status(400).json({ message: "Something Went Wrong" + error })
    }

}



// get All User Orders


export const getUserOrdersbyid = async(req,res)=>{


    const {userid} = req.body;
    
    try {
        const orders = await Order.find({userid :userid});

         res.send(orders)

    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }

}

// orders list Admin



export const AllOrders = async (req, res) => {
    try {

        const order = await Order.find({})
        return res.send(order)

    }
    catch (err) {
        return res.status(422).json({
            message: "error"
        })
    }
}