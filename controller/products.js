const Product = require('../models/product')

const getProducts = async(req,res)=>{
    // const myData = await Product.find({})
    // res.status(200).json({myData})

    //if user searches for particular name,featured,company,price, rating so to implement advanced search depending upon pattern matched , even if more than one item filtering is applied and other pattern doesnot matches then also it will return depending upon what pattern it matches 
//handling inndivisual objects in model:
const {company, name, featured, price , sort, select}=req.query //it will searches for paticular company entered by user case sensitive and if found will return output and will not check anything else even if along with it & is used and which doesnot exist still it will return depending upon company if company is not found then it will return all dataset
const queryObject={}

//filterations techniques depending upon entered query by user
if(company){
    queryObject.company=company;  
}
if(name){
   // queryObject.name=name;
   queryObject.name={$regex:name, $options:"i"}
}
if(featured){
    queryObject.featured=featured;
}
if(price){
    queryObject.price=price;
}

apiData=Product.find(queryObject);

if(sort){     //sort method is used to sort output in asc/desc order 
applySort=sort.replace(","," ") // comma is used to enter multiple sorts on name, price etc and is replaced by space because sort works on space format  
apiData=apiData.sort(applySort)
}

if(select){
    //applySelect=select.replace(","," ")
    applySelect=select.split(',').join(' ');
    apiData=apiData.select(applySelect)      //to select data based on input by user 
}

//paginationa => number of page at which user whats to go to while entering 
let pageNo = Number(req.query.page) || 1
let limit = Number(req.query.limit) || 4    //number of items per page
let skip = (pageNo-1)*limit //number of items to be skipped to display after that in next page

apiData.skip(skip).limit(limit)

console.log(queryObject);

const availableProducts = await apiData
//to apply sorting functionality : const availableProducts = await Product.find(queryObject).sort("name -price") it will sort according to name in asc order and price in desc order 
res.status(200).json({availableProducts, nbHits:availableProducts.length}) 

    // const myData = await Product.find(req.query) //.query method is usaed for searching,sorting, pagination and other advanced functionality to make api more interactive and dynamic, user friendly
     // res.status(200).json({myData})                //here eeq.query will allow to search for product name,company,price etc wise but it takes exact pattern as input & if found then only return data
    // console.log(`req query`,req.query)
    // console.log(myData)


   // res.status(200).json({msg:"Jai shree Ram from getProducts functions in controller-products"})

}

const getProductsTesting=async (req,res)=>{
    res.status(200).json({msg:"Jai shree Ram from getProductsTesting functions in controller-products"})
}

module.exports={getProducts, getProductsTesting}