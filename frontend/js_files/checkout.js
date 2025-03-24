export default async function checkout(amount) {
  try {
    const request = await fetch('http://localhost:5000/createOrder', {
      method: 'post',
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ totalAmount: amount }),
    })
    const response = await request.json()
    console.log(response)
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
        let request = await fetch('http://localhost:5000/verifyOrder', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...res, orderId: response.orderId })
        })
      }
    }
    const rzp1 = new Razorpay(options);
    rzp1.open()
  }
  catch (e) {
    console.log(e)
  }
}















