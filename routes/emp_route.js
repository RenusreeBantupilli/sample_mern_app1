let express=require('express');
let router=express.Router();
let {users}=require('../models/users');

//localhost:3000/api/employes/register
router.post("/register",async(req,res)=>{
    console.log(req.body);
    let newUser=new users(req.body);
    let result=await newUser.save();
    res.send(result);
});
router.post("/login",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});
router.get("/viewtask",(req,res)=>{
    res.send("view task route");
});
router.put("/updatetask",(req,res)=>{
    res.send("update task route");
});
module.exports=router;

