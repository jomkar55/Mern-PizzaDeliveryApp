import User from "../MODEL/User.Model";






export const RegisterUser = async (req, res) => {

    const { name, email, number, address, password } = req.body

    if (!name && !email && !number && !address && !password) {
        return res.status(422).json({
            message: "error"
        })
    }
    const exist = await User.findOne({ email: req.body.email })

    if (!exist) {
        const newUser = await User.create
            ({ name, email, number, address, password })
        if (newUser) {

            newUser.save()
            res.send('User Registered Successfully')
        }
        else {

            return res.status(400).json({
                message: "error",
                status: false
            })
        }
    }
    if (exist) {

        return res.status(400).json({
            message: "Email Already Exists",
            status: false,
        })
    }

}





// login

export const UserLogin = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.find({ email, password })

        if (user.length > 0) {

            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id

            }
            res.send(currentUser)

        } else {
            return res.status(422).json({
                message: "User Login Failed"
            })
        }
    } catch (error) {

        return res.status(422).json({
            message: "error"
        })

    }

}


// 


export const getAllUsers = async (req, res) => {
    try {

        const users = await User.find({})
        return res.send(users)

    }
    catch (err) {
        return res.status(422).json({
            message: "error"
        })
    }
}


export const DeleteUser =async (req,res)=>{
    
const id = req.body.id
    try{
        await User.findOneAndDelete({_id : id})
        res.send("User Deleted Sucessfully")


    }
    catch(error){
        return res.status(400).json({message:error})
    }


}
