const express = require("express")
const fs = require("fs")
const app = express();

const File = fs.readFileSync("Index.html" , "utf-8");

const Port = 80;
const Host = "127.0.0.1";

app.get("/" , (req , res)=>{
    res.status(200).send(File)
})

app.listen(Port , ()=>{
    console.log(`server starting at http://${Host}:${Port}`)
})