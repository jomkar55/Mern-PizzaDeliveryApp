import express from 'express';
import mongoose from 'mongoose';
import route from './ROUTER/routers';
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json())


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/', route, (req, res) => {



    return res.status(200).send({
        message: "success",
        data: route,
        status: true
    });

   



})

mongoose.connect('mongodb+srv://omkar:omkarj@cluster0.oy279.mongodb.net/PizzaData?retryWrites=true&w=majority')
    .then(() => {
        console.log('mongodb started');

    })
    .catch(() => {
        console.log('mongo db connection failed ')

    });



app.listen(3009, function () {
    console.log('Example app listening on port 3009!');
});