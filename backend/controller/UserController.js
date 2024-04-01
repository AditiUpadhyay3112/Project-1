
import bcrypt from 'bcrypt';
import { usermodel } from '../Models/Usermodel.js';
import JWT from 'jsonwebtoken';
// const JWT_SECURE = process.env.JWT_SECURE;
const JWT_SECURE = "thisismyjsonwebtokensecurekey"
console.log(JWT_SECURE);
export const Register = async (req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(404).json({
            success:false,
            status:404,
            message:"Please fill all the fields"
        });
    }
    try {
       const registerDetail = await usermodel.find({email:email})
        console.log(registerDetail);
        if(registerDetail.length > 0){
            return res.status(401).json({
                success:false,
                message:"this email already register"
            });
        }

        const saltround = 10;
        const hashedpassword = await bcrypt.hash(password,saltround);

        const user = await usermodel.create({
            name:name,
            email:email,
            password:hashedpassword
        })
        res.status(200).json({
            success:true,
            message:"Data saved successfully",
            user
        })
    } catch (error) {
        console.log(error)

    }


    // res.send("Data saved")
    // console.log(name,email,password)
}
//Login controller

export const Login = async(req,res)=>{
    const{email,password } = req.body;
    console.log(email,password)
    const UserData = await usermodel.findOne({email: email});
    if(!UserData){
        return res.status(401).json({
            success:false,
            message:"Please Provide proper password"
        })
    }
    const comparePass = await  bcrypt.compare(password, UserData.password)
    if(!comparePass){
        return res.status(401).json({
            success:false,
            message: "Please enter"
        })
    }
const user = {
    id: {
    userID: UserData._id
}
}
const token= JWT.sign(user,JWT_SECURE ,{expiresIn: '1h'});

    res.status(200).json({
        success: true,
        message: "login success",
        token
    })
}


