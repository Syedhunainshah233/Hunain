const express = require("express")
const app = express();

const Port = 80;
const Host = "127.0.0.1";

app.get("/" , (req , res)=>{
    res.status(200).send("This Is Home Page")
})

app.listen(Port , ()=>{
    console.log(`server starting at http://${Host}:${Port}`)
})