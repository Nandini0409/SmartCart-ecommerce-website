const Razorpay = require('razorpay')

const verifyOrder = (req, res) => {
  const paymentInfo = req.body
  console.log(paymentInfo)
  const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
  })
  const { validatePaymentVerification } = require('razorpay/dist/utils/razorpay-utils');
  const isValid = validatePaymentVerification({ "order_id": paymentInfo.orderId, "payment_id": paymentInfo.razorpay_payment_id }, paymentInfo.razorpay_signature, process.env.KEY_SECRET);
  if (isValid) {
    return res.status(200).json({ message: 'Payment verification successful!' })
  }
  else {
    return res.status(400).json({ message: 'Invalid payment signature!' })
  }
}

module.exports = verifyOrder