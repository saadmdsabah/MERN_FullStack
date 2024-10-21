const express = require('express');
const app = express();

function add(a, b){
    return a+b;
}

app.listen(3000, ()=>console.log("Server is running"))