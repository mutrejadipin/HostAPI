//create collections, tables= schema using models in mongodb using mongoose
//define schema

const mongoose=require('mongoose')

//create schema or structure using mongoose instance

const productSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:[true,"pls add price for item"]
},
featured:{
    type:Boolean,
    default:false
},
rating:{
    type:Number,
    default:5.0
},
createdAt:{
    type:Date,
    default:Date.now()
},
company:{
    type:String,
    enum:{   //to provide list of company names from which one can choose and not just any random value
        values:['Google','Microsoft','OpenAi','Adobe','Apple','Xiomi','Samsung','OnePlus'],
        message:`value not supported. Please pick from listed above`
    }
}
})

module.exports=mongoose.model('Product',productSchema)