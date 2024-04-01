import express from "express";
import { DBConnect } from "./Database/database.js";
import dotenv from 'dotenv';
dotenv.config({path: '.env'});
import router from "./routes/Userrouter.js";
const app = express();
app.get("/" , function(req,res){
    res.send("Aditi");
}
)
app.use(express.json());
app.use("/api/v1",router)
DBConnect();

app.listen(5000, function(req,res){
    console.log("server running on 5000");
})
