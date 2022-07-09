import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/connectdb.js";

// configure .env
dotenv.config({path:"backend/config/config.env"});
const port = process.env.PORT;

// connecting to database
connectDB();



app.listen(port, ()=>{
	console.log(`server running at localhost:${port}`);
});
