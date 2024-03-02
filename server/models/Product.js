const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({

    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true

    },
    
    rating:{
        count:{
            type:Number,
            default:0

        },
        rate:{
            type:Number,
            default:0

        }
    },

})


module.exports=mongoose.model('products',productSchema)