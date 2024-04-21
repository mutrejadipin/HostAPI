const express=require('express') //express provides functionality to create a server
const app=express() //to use all functionality and packages as instance

const port = process.env.port || 5000     //process.env finds port which is vacant to host our application live 

const products_route = require('./routes/products') // exported getProducts in routes -> products.js is now imported here 

const connectDB=require('./db/connect')

require('dotenv').config()    //package used to secure personal datax

//req body in callback function(fat function) represents HTTP request and has properties for request query string , parameter, body & HTTP header
app.get('/',(req,res)=>{
    res.send("Jai Shree Ram");
})

//now as middleware i.e routes and controllers are set we can use it like this:
app.use('/products',products_route)

connectDB(process.env.mongodb_uri); //calling function to connect to db

app.listen(port,()=>{
    console.log(`connected at port ${port}`)
})


  /*or we can use this way to write above function to listen*
  const start = async()=>{
  await connectDB();
  try{
  app.listen(port,()=>{
  console.log(`${port} connected`)
  })
  }
  catch(error){
  console.log(error)
  }
  }
 start()
 */
 

