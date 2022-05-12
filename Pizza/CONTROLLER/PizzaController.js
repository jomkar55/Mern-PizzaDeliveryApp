import pizza from "../MODEL/Pizza.Model";




export const getAllPizzas = async (req, res) => {
    try {

        const pizzas = await pizza.find({})
        return res.send(pizzas)

    }
    catch (err) {
        return res.status(422).json({
            message: "error"
        })
    }
}




export const AddPizzas = async (req, res) => {

    const pizzas = req.body

    try {

        const newPizza = new pizza({

            name: pizzas.name,
            varients: ["small", "medium", "large"],
            prices: [pizzas.prices],
            category: pizzas.category,
            image: pizzas.image,
            description: pizzas.description
        })
        await newPizza.save()
        res.send("New Pizza Added Successfully")

    }
    catch (error) {
        return res.status(400).json({ message: "error" })


    }

}



export const getpizzabyidPizza = async(req,res)=>{


    const id = req.body.id;
    
    try {
        const Pizza = await pizza.findOne({_id :id});

         res.send(Pizza)

    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }

}



export const UpdatePizzabyid =async(req,res)=>{
    const id = req.body.id;

    try {
        const Pizza = await pizza.findOne({_id:req.body.id});
        Pizza.name  = id.name
        Pizza.description  =id.description
        Pizza.image  =id.image
        Pizza.category  =id.category
        Pizza.prices  =[id.prices]

        await Pizza.save()
        res.send("Pizza edited successfully")

    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }


}

export const DeletePizza =async(req,res)=>{
    // const id= req.body.id

    try{
        await pizza.findOneAndDelete(req.params.id)
        res.send("Pizza Deleted Sucessfully")
        
    }
    catch(error){
        return res.status(400).json({message:error})
    }


}