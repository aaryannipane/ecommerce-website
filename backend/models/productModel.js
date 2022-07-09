import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String, required:[true, "Please Enter Name"],
        trim:true
    },
    description:{
        type:String, required:[true, "Please Enter description"]
    },
    price:{
        type:Number,
        required:[true, "Please Enter Product Price"],
        maxLength:[8, "Price cannot exceed 8 character"],
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true, "Please Enter product category"]
    },
    stock:{
        type:Number,
        required:[true, "Please Entet product Stock"],
        maxLength:[4, "stock cannot exceed 4 character"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            Comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model("product", productSchema);
