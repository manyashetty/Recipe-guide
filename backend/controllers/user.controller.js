const UserModel = require ("../models/user.model.js")
const {isValid , isValidBody} =require("./validator");
const jwt = require ("jsonwebtoken")
    const createUser = async(req,res)=>{
        try{
        let {email,password}=req.body
//email
//emal validation
if(!isValid(email)){
    return res.status(400).json({message:"Invalid Email"});
 }
if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
    return res
      .status(400)
      .send({ status: false, message: " Email should be a valid" });
  }
  let duplicate = await UserModel.findOne({email})
  if (duplicate){
    return res.status(400).send({msg:"Email already exists"});
  }
  //password Validation
  if (!isValid( password)) {

    return res.status(422).send({ message: 'Password is required' });

    };


        let createUser=await UserModel.create({email,password});
        return res
        .status(201)
        .send({
            status:true,
            message:"User Register Successfully",
            data : createUser,
        });
}
catch (error){
    res.send(500).send(error);
}
};
//---Login User---
const loginUser = async(req,res)=>{
    if(!isValidBody(req.body)){
        return  res.status(400).send({status:"false",msg:"Please enter all fields"});
    }
    const {email,password}= req.body;
    if(!isValid(email)){
        return res.status(400).send({status:"false",msg:"Email is required"});
    }
    if(!isValid(password)){
       return res.status(400).send({status:"false",msg:"password is required"});
    }
    
//here
    const findUser = await UserModel.findOne({email,password})
    if(!findUser){
      return res.status(404).send({status:"false",msg:"User Not Found"});
    }
    const token = jwt.sign({ id: findUser._id},"secretkey");
    res.json({
        token,
        userID: findUser._id,
        message: "User Logged in successfully",
    });

};
module.exports={createUser, loginUser};