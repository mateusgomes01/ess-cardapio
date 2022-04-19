const express = require("express");
const app = express();
const mysql = require("mysql");
const cors=require("cors");
app.use(express.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.listen(3001, () => {
    console.log("Server running!");
});