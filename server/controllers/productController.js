const product=require('../models/Product')


exports.getAllProducts=async(req,res)=>{
    try {
        const products= await product.find()
        return res.json(products)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}

exports.getProductById=async(req,res)=>{
    try {
        const products=await product.findById(req.params.id)
        if(!products){
            return res.status(404).json({mesage:"Product not found"})
        }
        return res.json(products)
    } catch (error) {
        return res.status(500).json({message:error.mesage})
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
        const newProduct=await products.save()
        return res.status(201).json(newProduct)
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

exports.updateProduct=async(req,res)=>{
    
    try {
        const products=await product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!products){
            returnres.status(404).json({message:"Product not found"})
        }
        return res.json({message:"Product updated "})
    } catch (error) {
        return res.status(500).json({message:error.mesage})
    }
}

exports.deleteProduct=async(req,res)=>{
    try{
        const products=await product.findByIdAndDelete(req.params.id)
        if(!products){
           return res.status(404).json({message:"Product not found"})
        }
        return res.json({message:"Product deleted"})
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    
}