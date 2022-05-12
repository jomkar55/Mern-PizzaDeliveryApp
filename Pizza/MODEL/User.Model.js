import mongoose from "mongoose";


const { Schema } = mongoose;


const schema = new Schema({

    name: {
        type: String, require,
    },
    email: {
        type: String, require,
    },
    number: {
        type: Number, require,
    },
    address: {
        type: String, require,
    },
    password: {
        type: String, require,
    },
    isAdmin: {
        type: Boolean, require, default: false
    }
}, {
    timestamps: true
});
const User = mongoose.model('user', schema)

export default User;