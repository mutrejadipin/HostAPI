const mongoose = require('mongoose') //mongoose is to connect backend to db

uri = '...'

const connectDB = () => {
    console.log("connected to DB")
    return mongoose.connect(uri,{
        //useNewUrlParser: true,
        //useUnifiedTopology : true,
    })
}

module.exports=connectDB;
