const express = require('express');
const app = express();

function temp(){
    console.log("Will remove this function");
}

function add(a, b){
    return a+b;
}

function newFeatureAdded(){
    console.log("This is a new Feature");
}

app.listen(3000, ()=>console.log("Server is running"))