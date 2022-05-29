const express = require("express");
const ProductData = require("./productData")
const cors = require("cors")
PORT = 5000;

const app  = new express()
app.use(cors())

app.get('/products',(req,res)=>{
 res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");

 ProductData.find().then((products)=>{
  res.send(products)
 })
})

app.listen(PORT,()=>{
 console.log(`App is running on ${PORT}`)
})