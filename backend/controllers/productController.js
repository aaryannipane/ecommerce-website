class ProductController{
    static getAllProduct = (req, res)=>{
        res.status(200).json({message:"Route is working fine"});
    }
}


export default ProductController;