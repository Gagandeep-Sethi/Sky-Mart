const User = require('../models/User');
const bcrypt = require('bcrypt');             //to bycrpt the password and save the the hash password in db 
const validator=require('validator')         //valid that can be used to validate fields
const jwt=require('jsonwebtoken')            //for token auth

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})//to generate web token sign takes to arg id of user secret key that only server have with the help pf which server decodes the token and third we can pass the time that uptill when the token is valid and can be used in the browser
}                                                             // 1{is the token represents payload of token we wanna create },2{secret key},3{time etc.}


exports.signIn = async(req, res) => {
   const  {email,password}=req.body
   try {
    if(!email || !password){
        throw new Error("All field must be filled")
    }

    const user =await User.findOne({email:email.toLowerCase()})
    if(!user){
        throw new Error("Email not found")
    }

    const match= await bcrypt.compare(password,user.password)
    if(!match){
        throw new Error("Incorrect password")
    }
    
    const token=createToken(user._id)
    res.status(200).json({email,username:user.username,token})
   } catch (error) {
    if(error instanceof Error){
        res.status(400).json({message:error.message})
    }
    else{
        res.status(500).json({message:error.message})
    }

   }
};

exports.signUp = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if(!email||!password){
            throw new Error("All fields must be filed")     //this throws an new error which we can catch in catch block and used that error to display on screen
        }

        if(!validator.isEmail(email)){
            throw new Error("Email is not valid")
        }

        if(!validator.isStrongPassword(password)){
            throw new Error("password not strong")
        }

        const emailExist = await User.findOne({ email });
        if (emailExist) {
            throw new Error( "Email already exist" );
        }
        const salt = await bcrypt.genSalt(10);               //gen salt is done suppose 2 users have same password so their hash code will also be same to with this gensalt that hash code will also be different for same password
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            username,
            email:email.toLowerCase(),
            password: hashPassword
        });
        const token=createToken(user._id)    //jwt contains 3 parts(header{contains the algo for used for jwt, payload{contains non sensitive user data},signature{used to verify token by the server}})
        res.status(200).json({email,username,token});
    } catch (error) {
        if (error instanceof Error) {                  //this line check if the error is the part of Error class that we have thrown 
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Server error" });
        }
    }
};
