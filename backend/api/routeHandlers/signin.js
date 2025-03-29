const Customer = require('../database/customerModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signin = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: 'User Info fields can not be empty!' })
    }
    const customerFoundInDb = await Customer.findOne({ email })
    if (!customerFoundInDb) {
      return res.status(404).json({ message: 'Email not registered! try signup instead.' })
    }
    const isValidPassword = await bcrypt.compare(password, customerFoundInDb.password)
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password!' })
    }
    const token = jwt.sign({ id: customerFoundInDb._id }, process.env.SECRET_KEY, { expiresIn: '7d' })
    res.cookie('ecommerce_jwt', token,{
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    res.cookie('ecommerce_userInfo', JSON.stringify({ name: customerFoundInDb.name, email: customerFoundInDb.email }), {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    console.log('Cookies set:', res.getHeaders()['set-cookie'])
    return res.status(200).json({ message: 'Authentication successfull' })
  }
  catch (e) {
    console.log(e)
    return res.status(500).json({ message: 'Authentication failed!' })
  }
}

module.exports = signin;