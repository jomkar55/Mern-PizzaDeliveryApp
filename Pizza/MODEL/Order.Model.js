import mongoose from "mongoose";



const { Schema } = mongoose;


const schema = new Schema({

    name:{type:String , require},
    email:{type:String , require},
    userid:{type:String , require},
    orderItems:{},
    shippingAddress:{type:Object},
    orderAmount:{type:Number ,require},
    isDelivered:{type:Boolean , require ,default:false},
    transactionId:{type:String,require} 
}, {
    timestamps: true
});
const Order = mongoose.model('order', schema)

export default Order;