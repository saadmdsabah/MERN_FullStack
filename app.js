const express = require('express');
const app = express();

function temp(){
    console.log("Will remove this function");
}

app.listen(3000, ()=>console.log("Server is running"))