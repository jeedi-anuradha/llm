var express=require('express');
var app=express();
app.get("/register",async(req,res)=>{
    let data=await fetch("https://fakestoreapi.com/products");
    let json_data=await data.json();
    res.send({
        status:200,
        data:json_data
    })
})
app.get("/register/:id",async(req,res)=>{
    let data=await fetch("https://fakestoreapi.com/products");
    let json_data=await data.json();
    ID=req.params.id
    let filter_id=json_data.filter((val)=>{
        // console.log(val)
        return val.id==ID;
    })
    res.send({
        status:200,
        id:req.params.id,
        data:filter_id
    })
})
app.listen(4000,()=>{
    console.log("server is running on port 4000")
})