const product=require('../models/Product')


exports.getAllProducts=async(req,res)=>{
    try {
        const products= await product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

exports.getProductById=async(req,res)=>{
    try {
        const products=await product.findById(req.params.id)
        if(!products){
            res.status(404).json({mesage:"Product not found"})
        }
        res.json(products)
    } catch (error) {
        res.status(500).json({message:error.mesage})
    }

}

exports.createProduct=async(req,res)=>{
    const products= new product({
        category:req.body.category,
        description:req.body.description,
        title:req.body.title,
        price:req.body.price,
        image:req.body.image
    })
    try {
        const newProduct=products.save()
        res.status(201).json(newProduct)
        
    } catch (error) {
        req.status(500).json({message:error.message})
    }
}

exports.updateProduct=async(req,res)=>{
    
    try {
        const products=await product.findByIdAndUpdate(req.param.id,req.body,{new:true})
        if(!products){
            res.status(404).json({message:"Product not found"})
        }
        res.json({message:"Product updated "})
    } catch (error) {
        res.status(500).json({message:error.mesage})
    }
}

exports.deleteProduct=async()=>{
    try{
        const products= product.findByIdAndDelete(req.param.id)
        if(!products){
            res.status(404).json({message:"Product not found"})
        }
        res.json({message:"Product deleted"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
    
}