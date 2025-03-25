const nodemailer = require("nodemailer");

const sendMail = (receiver, subject, message)=>{
  const transporter = nodemailer.createTransport({
    service: process.env.NODE_MAILER_SERVICE,
    tls: {
        rejectUnauthorized: false,  
    },
    auth:{
      user: process.env.NODE_MAILER_SMARTCART,
      pass: process.env.NODE_MAILER_PSW
    }
  })
  
  const mailOptions = {
    from : process.env.NODE_MAILER_SMARTCART,
    to : receiver,
    subject : subject,
    text : message
  }
  
  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      return console.log('Error sending email: ', error)
    }
    console.log('Email sent: ', info.response)
  })
}

module.exports = sendMail
