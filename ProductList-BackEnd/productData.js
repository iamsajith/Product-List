const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productdb");
const schema = mongoose.Schema;

var ProductSchema = new schema({
 productCode: String,
 availability: Number,
 price: Number,
 rating: Number,
 productName: String,
 imageUrl: String
})





var ProductData = mongoose.model('products', ProductSchema)

module.exports = ProductData
