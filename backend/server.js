const express = require("express");
const app = express()

app.get('/', (req, res)=>{
    res.json({mssg: "hello"});
});

app.listen(3000, ()=>{
    console.log("Server runs on port 3000!");
})