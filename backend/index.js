import express from "express";
import { DBConnect } from "./Database/database.js";
import dotenv from 'dotenv';
dotenv.config({path: '.env'});
const app = express();
app.get("/" , function(req,res){
    res.send("Aditi");
}
)
DBConnect();

app.listen(5000, function(req,res){
    console.log("server running on 5000");
})
