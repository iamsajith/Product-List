const express = require("express");
const ProductData = require("./productData");
const credentialData = require("./credentialData");
const cors = require("cors");
PORT = 5000;
const jwt = require("jsonwebtoken");

const app = new express();
app.use(cors());

app.use(express.json({ urlencoded: true }));

user = {
  username: "sajithj03@gmail.com",
  password: "9207612472",
};

app.get("/products", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  ProductData.find().then((products) => {
    res.send(products);
  });
});

app.post("/insert", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");

  var product = {
    productName: req.body.item.productName,
    productCode: req.body.item.productCode,
    availability: req.body.item.availability,
    price: req.body.item.price,
    rating: req.body.item.rating,
    imageUrl: req.body.item.imageUrl,
  };
  var products = new ProductData(product);

  products.save();
});

app.delete("/products/clear", (req, res) => {
  res.header("Access-Control-Allow_Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");

  ProductData.deleteMany({}).then((products) => {
    res.send(products);
  });
});

app.post("/login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  let data = req.body.authData;
  if (data.username != user.username){
     res.status(401).send("Invalid username")

  }
  else if (data.password != user.password){
    res.status(401).send("Invalid password")
  } 
  else{
    console.log(data.password)
   let payload = {subject:user.username + user.password}
   let token = jwt.sign(payload,"secretKey")
   res.status(200).send({token})
  }
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
