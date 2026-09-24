let express=require('express');
let router=express.Router();
let bcrypt =require('bcrypt');
let {users}=require('../models/users');

//localhost:3000/api/employes/register
router.post("/register",async(req,res)=>{
    console.log(req.body);
    req.body.password=await bcrypt.hash(req.body.password,10);
    let newUser=new users(req.body);
    let result=await newUser.save();
    res.send(result);
});
router.post("/login", async(req,res)=>{
    let result=await users.findOne({email:req.body.email})
    
    if(result){
        let matchpass=await bcrypt.compare(req.body.password,result.password);
        if(matchpass){
            res.send("login successfull")
        } else{
         res.send("login failed")
        }
    }else{
        res.send("user not found");
    }
    
    
   
});
router.get("/viewtask",(req,res)=>{
    res.send("view task route");
});
router.put("/updatetask",(req,res)=>{
    res.send("update task route");
});
module.exports=router;

