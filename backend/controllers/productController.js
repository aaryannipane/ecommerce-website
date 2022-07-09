import ProductModel from "../models/productModel.js";

class ProductController{
    
    // create product --admin
    static createProduct = async (req, res, next)=>{
        const product = await ProductModel.create(req.body);

        res.status(201).json({success:true, product})
    }

    static getAllProduct = async (req, res)=>{
        const products = await ProductModel.find();

        res.status(200).json({success:true, products});
    }

    // update product --admin
    static updateProduct = async (req, res, next)=>{
        let product = await ProductModel.findById(req.params.id);

        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product not found"
            })
        }

        product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true, useFindAndModify:false});

        res.status(200).json({
            success:true,
            product
        })
    }

}


export default ProductController;