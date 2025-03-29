import {CONFIG} from './config.js'

export async function getProducts(category){
  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}/products/${category}`)
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
    const response = await fetch(`${CONFIG.API_BASE_URL}/autoMail`, {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...mailInfo, emailType: mailType })
    })
    return response.status
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