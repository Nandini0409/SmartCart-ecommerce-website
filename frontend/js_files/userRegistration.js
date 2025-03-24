import { displayNotification } from "./module.js"
import { mailListRequest } from "./module.js"

const params = new URLSearchParams(window.location.search)
let formCategory = params.get('class')
let notificationPopup = document.querySelector('.notificationPopup')

document.addEventListener('DOMContentLoaded', () => {
  const signupBlock = document.getElementById('signupBlock')
  const signinBlock = document.getElementById('signinBlock')
  if (formCategory === 'login') {
    signinBlock.style.display = 'flex'
    signupBlock.style.display = 'none'
    signin()
  }
  else if (formCategory === 'signup') {
    signinBlock.style.display = 'none'
    signupBlock.style.display = 'flex'
    signup()
  }
})





const signin = () => {
  document.getElementById('loginEmail').focus();
  const form = document.getElementById('signinForm')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const userData = Object.fromEntries(formData.entries())
    try{const response = await fetch('http://localhost:5000/signin', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    if(response.status === 200){
      window.location.href = "products.html?class=allProduct"
      setTimeout(() => {
        displayNotification('successfully loged in to your account! now you can proceed to checkout or continue to shopping!', notificationPopup)
      }, 3000);
    }
    else if(response.status === 404){
      displayNotification('Email not registered! try <a href="userRegistration.html?class=signup">Signup</a> instead.', notificationPopup)
    }
    else if(response.status === 401){
      displayNotification('invalid password! try again.', notificationPopup)
      document.getElementById('loginPassword').focus();
    }
    else{
      displayNotification('some error occurred!', notificationPopup)
    }
  }
  catch(e){
    console.log(e)
      displayNotification('some internal server error occurred!', notificationPopup)

    }
  })
}






const signup = () => {
  document.getElementById('name').focus();
  const form = document.getElementById('signupForm')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const userData = Object.fromEntries(formData.entries())
    console.log(userData)
    const regex = /^(?=.*[^a-zA-Z0-9\s]).{8,}$/
    if (!regex.test(userData.password)) {
      displayNotification('password should be minimum 8 character long and contain atleast 1 special character.', notificationPopup)
      document.getElementById("signupPassword").focus()
      return;
    }
    try{
      const response = await fetch('http://localhost:5000/signup', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
    if (response.status === 201) {
      mailListRequest(userData, 'accountCreationConfirmation')
      window.location.href = "userRegistration.html?class=login"
      setTimeout(() => {
        displayNotification(`Account Successfully created! Log in to your account to continue with your shopping. <a href="userRegistration.html?class=login">Login</a>`, notificationPopup)
      }, 3000);
    }
    else if (response.status === 409) {
      displayNotification('This email is already registered! Try login instead.', notificationPopup)
      document.getElementById("signupEmail").focus()
    }
    else if (response.status === 422) {
      displayNotification('Provided email address is non-existent! Recheck your email address.', notificationPopup)
      document.getElementById("signupEmail").focus()
    }
    else {
      displayNotification('Some error occurred while creation of your account! Try again after some time', notificationPopup)
    }
    }
    catch(e){
      displayNotification('Failed to connect to the server. Please check your internet connection.', notificationPopup)
    }
  })
}













