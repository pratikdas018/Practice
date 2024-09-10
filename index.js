require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send("hello");
});

app.get("/insta",(req,res)=>{
    res.send("this is the insta page of pratik");
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login CodeWithPratik</h1>");
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Hey Welcome to chai or code</h2>");
})
app.listen(process.env.PORT,()=>{
    console.log(`port is listing on ${port}`);
})