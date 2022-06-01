const express = require("express");
const ProductData = require("./productData")
const cors = require("cors")
PORT = 5000;

const app  = new express()
app.use(cors())

app.use(express.json({urlencoded:true}));


app.get('/products',(req,res)=>{
 res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
 ProductData.find().then((products)=>{
  res.send(products);
})
 

})

app.post('/insert',(req,res)=>{
 res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");


 var product = {
  productCode: req.body.item.productCode,
  productName: req.body.item.productName,
  availability: req.body.item.availability,
  price: req.body.item.price,
  rating: req.body.item.rating,
  imageUrl: req.body.item.imageUrl,
}
var products = new Productdata(product);

products.save();

})

app.listen(PORT,()=>{
 console.log(`App is running on ${PORT}`)
})