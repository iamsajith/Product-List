const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/productdb')

const schema = mongoose.Schema

var CredentialSchema = new schema({
 firstname: String,
 lastname:String,
 username : String,
 email : String,
 password : String,
})

var credentialData = mongoose.model('credentials',CredentialSchema)
module.exports = credentialData