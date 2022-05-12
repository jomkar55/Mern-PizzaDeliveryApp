import mongoose from "mongoose";



const { Schema } = mongoose;


const schema = new Schema({

    name: {
        type: String, require,
    },
    varients: [],
    prices: [],
    category: {
        type: String, require,
    },
    image: {
        type: String, require,
    },
    description: {
        type: String, require,

    }
}, {
    timestamps: true
});
const pizza = mongoose.model('pizzas', schema)

export default pizza;