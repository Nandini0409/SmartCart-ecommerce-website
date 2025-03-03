const Razorpay = require('razorpay')
const tokenVerification = require('../utilities/tokenVerification')

const createOrder = async (req, res) => {
  try {
    const amount = Number(req.body.totalAmount) * 100
    const token = req.cookies.ecommerce_jwt

    const verificationResult = tokenVerification(token)
    if(verificationResult.error){
      return res.status(verificationResult.status).json({message: verificationResult.data})
    }

    const userinfo = JSON.parse(req.cookies.ecommerce_userInfo)
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    })
    const response = await instance.orders.create({
      "amount": `${amount}`,
      "currency": "INR",
      "receipt": `receipt${Date.now()}`,
      "partial_payment": false,
      "notes": {
        "customerName": `${userinfo.name}`,
        "email": `${userinfo.email}`
      }
    })
    return res.status(200).json({ orderId: response.id, amount: response.amount, customerInfo: response.notes })
  }
  catch (e) {
    console.log(e)
    return res.status(500).json({ message: 'internal error!' })
  }
}

module.exports = createOrder
