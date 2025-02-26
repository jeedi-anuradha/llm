var express= require("express");
var app=express();
app.get("/llm",express.json(),(req,res)=>{
    var key="AIzaSyDcS8Cm24GBk8IFmtRre3w32XrhOIxtgiw"
    var url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="+key
    fetch(url,{
        "method":"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            "contents": [{
              "parts":[{"text":req.body.msg}]
              }]
             })
    }).then((val)=>{
        return val.json();
    }).then((val)=>{
        // console.log(val)
        res.send(val)
    })

})
app.listen(4001,()=>{
    console.log("server is running")
})