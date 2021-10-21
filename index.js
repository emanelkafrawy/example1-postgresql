const client = require("./connection.js");
const asyncc = require("./asyncfulltable.js")

const express = require("express");

const app = express();

app.listen(3000, ()=>{
    console.log("done");
});
app.get("/users", (req, res, next)=>{
    console.log("rrrrrr");
        // client.connect();
        // const {rows} =  client.query("insert into users values($1 , $2, $3, $4)", [250,"emv", "evlk", "cvairo"])//parameter way
        res.send(rows)

})