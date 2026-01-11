import express from "express";
import cookieParser from "cookie-parser";   
import cors from "cors";
import { connectDB } from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const CorsOption={
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(CorsOption));
let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    connectDB();
    console.log(`Server running on the port ${port}`);
})