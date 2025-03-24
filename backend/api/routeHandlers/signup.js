const Customer = require('../database/customerModel');
const { reqBodyValidator, passwordValidator } = require('../utilities/inputValidation')
const verifyEmail = require('../utilities/emailVerification')

const signup = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const isAlreadyCustomer = await Customer.findOne({ email })

    if (!reqBodyValidator(req.body)) {
      return res.status(400).json({ message: 'User Info fields can not be empty!' })
    }

    if (!passwordValidator(password)) {
      return res.status(400).json({ message: 'Invalid password! should be minimum 8 character long and have atleast 1 special character.' })
    }

    if (isAlreadyCustomer) {
      return res.status(409).json({ message: 'The email is already registered! try signing in instead.' })
    }
    const emailStatus = await verifyEmail(email)
    if (emailStatus !== 'valid') {
      return res.status(422).json({ "error": "Email address does not exist" })
    }
    const newCustomer = new Customer(req.body)
    await newCustomer.save()
    return res.status(201).json({ message: 'Account created successfully!' })
  }
  catch (e) {
    conosle.log(e)
    return res.status(500).json({ message: 'Some unexpected error occurred!' })
  }
}

module.exports = signup;