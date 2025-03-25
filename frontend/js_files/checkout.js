import { displayNotification } from "./module.js"

export default async function checkout(amount, notificationPopup) {
  try {
    const request = await fetch('http://localhost:5000/createOrder', {
      method: 'post',
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ totalAmount: amount }),
    })
    const response = await request.json()
    console.log(response)
    if(response.status === 401){
      displayNotification('You must login in order to proceed with checkout!', notificationPopup)
      setTimeout(() => {
        window.location.href='userRegistration.html?class=login'
      }, 6000);
      return;
    }
    const { name, email } = response.customerInfo

    const options = {
      "key": "rzp_test_qBZhkEUGbgJgDd",
      "amount": `${response.amount}`,
      "currency": "INR",
      "name": "SmartCart",
      "description": "Test Transaction",
      "order_id": `${response.orderId}`,
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": {
        "name": `${name}`,
        "email": `${email}`,
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#007bff"
      },
      "handler": async function (res) {
        let response = await fetch('http://localhost:5000/verifyOrder', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...res, orderId: response.orderId })
        })
        if(response.status === 200){
          displayNotification("Payment successful! Thank you for your order.", notificationPopup);
        }
        else if(response.status === 400){
          displayNotification("Payment verification failed. Please contact support.", notificationPopup);
        }
      }
    }
    const rzp1 = new Razorpay(options);
    rzp1.open()
  }
  catch (e) {
    console.log(e)
  }
}















