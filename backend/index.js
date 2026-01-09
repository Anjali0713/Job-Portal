import express from "express";
import cookieParser from "cookie-parser";   
import cors from "cors";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const CorsOption={
    origin:'http//localhost:5173',
    Credentials:true
}

app.use(cors(CorsOption));
let port = 3000;

app.listen(port, ()=>{
    console.log(`Server running on the port ${port}`);
})