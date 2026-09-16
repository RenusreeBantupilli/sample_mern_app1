let express=require('express');
const{MongoDriveError}=require('mongodb');
let router=express.Router();

router.get("/viewemployees",(req,res)=>{
    res.send("view empolyees route");
});
router.post("/assign task",(req,res)=>{
    res.send("assign task route");
})
router.get("/viewtask",(req,res)=>{
    res.send("view task route");
})
router.delete("/deleteemp",(req,res)=>{
    res.send("delete emp route");
})
module.exports=router;

