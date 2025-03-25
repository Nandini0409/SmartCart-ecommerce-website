export async function getProducts(category){
  try {
    const response = await fetch(`http://localhost:5000/products/${category}`)
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.message}`)
    }
    let data = await response.json()
    data = data.map((product)=>{
      let {_id: id, ...rest} = product
    return product = {id, ...rest}
    })
    return data
  }
  catch(e) {
    console.log(e)
  }
}


export async function mailListRequest (mailInfo, mailType){
  try{
    console.log('sendding mail request')
    const response = await fetch('http://localhost:5000/autoMail', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...mailInfo, emailType: mailType })
    })
    if(response.status === 422){
      return 422
    }
  }
  catch(e){
    console.log(e)
  }
}


export function displayNotification(message, notificationPopup){
  notificationPopup.innerHTML = `<p>${message}</p>`
  notificationPopup.classList.add('show')
  setTimeout(() => {
    notificationPopup.classList.remove('show')
  }, 5000);
}