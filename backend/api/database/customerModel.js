const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const customerSchema = mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique: true
  },
  password : {
    type : String,
    required : true,
    minlength : 8
  }
})

customerSchema.pre('save', async function(){
  this.password = await bcrypt.hash(this.password, 12)
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;