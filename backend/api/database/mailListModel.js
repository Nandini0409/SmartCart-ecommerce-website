const mongoose = require('mongoose')

const mailListSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  emailType:{
    type: String,
    required: true,
  }
})

const MailList = mongoose.model('MailList', mailListSchema)

module.exports = MailList;
