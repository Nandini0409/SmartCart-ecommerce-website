import { displayNotification, mailListRequest } from "./module.js"
const notificationPopup = document.querySelector('.notificationPopup')

document.addEventListener('DOMContentLoaded', () => {
  shopNowEventHandler()
  contactFormHandler()
})

const shopNowEventHandler = () => {
  const shopNow = document.getElementById('shopNow')
  if (shopNow) {
    shopNow.addEventListener('click', () => {
      window.location.href = 'products.html?class=allProduct'
    })
  }
}

const contactFormHandler = () => {
  const form = document.getElementById('contactForm')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const userData = Object.fromEntries(formData.entries())
    const mailStatus = await mailListRequest(userData, 'userQuery')
    if (mailStatus === 422) {
      displayNotification('Provided email address is non-existent! Recheck your email address.', notificationPopup)
    }
    else{
      displayNotification('Thanks for getting in touch! 😊 We’ve received your message and will respond as soon as possible. Stay tuned!', notificationPopup)
    }
  })
}
