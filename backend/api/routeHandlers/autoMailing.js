const MailList = require('../database/mailListModel')
const { addEmailToSheet } = require('../utilities/addToGoogleSheet')
const sendMail = require('../utilities/nodemailer')
const verifyEmail = require('../utilities/emailVerification')

const autoMail = async (req, res) => {
  try {
    const mailInfo = req.body
    const newMail = new MailList(mailInfo)
    await newMail.save()

    const emailStatus = await verifyEmail(mailInfo.email)
    if (emailStatus === 422) {
      return res.status(422).json({ message: 'provided email address is invalid ' })
    }
    else if (emailStatus === 200) {
      if (mailInfo.emailType === 'newsletter') {
        console.log('mail added to list')
        addEmailToSheet(mailInfo.email)
        return res.status(201).json({ message: 'Subscribed to the Newsletter!' })
      }
      else if (mailInfo.emailType === 'userQuery') {
        const receiver = process.env.BUSINESS_OWNER_MAIL
        const mailSubject = `New Contact Form Submission from ${mailInfo.name}`
        const message = `You have received a new query from your website.\n\nName: ${mailInfo.name}\nEmail: ${mailInfo.email}\nMessage: ${mailInfo.message}`
        sendMail(receiver, mailSubject, message)
        return res.status(200).json({ message: 'email sent successfully!' })
      }
      else if (mailInfo.emailType === 'accountCreationConfirmation') {
        const receiver = mailInfo.email
        const mailSubject = `Regarding account creation confirmation`
        const message = `Dear ${mailInfo.name},
         Welcome to SmartCart! 🎉 We’re excited to have you on board.
          Your account has been successfully created, and you’re now ready to explore all that we have to offer.
          Next Steps:
          ✅ Log in to your account to continue with your shopping.
          🔒 Secure your account by ensuring your login credentials are safe.
          🛍️ Complete your checkout if you were in the middle of shopping.
          
          Login to Your Account from the website's login page
          
          If you didn’t create this account, please ignore this email or contact our support team immediately.
          
          Happy shopping!
          SmartCart`
        sendMail(receiver, mailSubject, message)
        return res.status(200).json({ message: 'email sent successfully!' })
      }
    }
  }
  catch (e) {
    console.log('some error occurred: ', e)
    return res.status(404).json({ message: 'error!!!' })
  }
}

module.exports = autoMail;