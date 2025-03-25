import { displayNotification } from "./module.js"

export default async function checkout(amount, notificationPopup) {
  try {
    const response = await fetch('http://localhost:5050/createOrder', {
      method: 'post',
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ totalAmount: amount }),
    })
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    if(response.status === 401){
      displayNotification('You must login in order to proceed with checkout!', notificationPopup)
      setTimeout(() => {
        window.location.href='userRegistration.html?class=login'
      }, 6000);
      return;
    }
    const { customerName, email } = jsonResponse.customerInfo
    const options = {
      "key": "rzp_test_AO71JIUm27dfec",
      "amount": `${jsonResponse.amount}`,
      "currency": "INR",
      "name": "SmartCart",
      "description": "Test Transaction",
      "order_id": `${jsonResponse.orderId}`,
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": {
        "name": `${customerName}`,
        "email": `${email}`,
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#007bff"
      },
      "handler": async function (res) {
        let response = await fetch('http://localhost:5050/verifyOrder', {
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















