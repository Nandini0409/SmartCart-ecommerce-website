const verifyEmail = async (email) => {
  try{
    console.log('mail is beign varified')
    const response = await fetch(`http://apilayer.net/api/check?access_key=${process.env.MAILBOX_LAYER_APIKEY}&email=${email}`)
    let jsonResponse = await response.json()
    console.log(jsonResponse.mx_found, jsonResponse.smtp_check)
    if(jsonResponse.mx_found && jsonResponse.smtp_check){
      console.log('email is existent!')
      return 200
    }
    else{
      console.log('email is non existent!')
      return 422
    }
  }
  catch(e){
    return e
  }
}

module.exports = verifyEmail;




