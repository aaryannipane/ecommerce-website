import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const result = await mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true});

        console.log("Connected to database " + result.connection.host);
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB;