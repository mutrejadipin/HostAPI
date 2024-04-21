//It contains data which is to be forwarded to DB
require('dotenv').config()
const connectDB = require('./db/connect')
const Product = require('./models/product')

const ProductJSON = require('./products.json')

connectDB(process.env.mongodb_uri)
Product.deleteMany(); 
Product.create(ProductJSON)
console.log("Connected to db and created schema using model")

