const mongoose = require('mongoose') //mongoose is to connect backend to db

uri = 'mongodb+srv://mutrejadipin:Mehul123@thapaapi.wdz5i3m.mongodb.net/?retryWrites=true&w=majority&appName=ThapaAPI'

const connectDB = () => {
    console.log("connected to DB")
    return mongoose.connect(uri,{
        //useNewUrlParser: true,
        //useUnifiedTopology : true,
    })
}

module.exports=connectDB;