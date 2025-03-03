const jwt = require('jsonwebtoken')

const tokenVerification = (token) => {
  let returnObject;
  if (!token) {
    return {
      error: true,
      status: 401,
      data: 'Token is missing!'
    }
  }
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    return {
      error: false,
      status: 200,
      data: decodedToken
    }
  }
  catch (e) {
    if (e.name === "TokenExpiredError") {
      return {
        error: true,
        status: 401,
        data: 'Token has expired! Please login again.'
      }
    }
    else {
      return {
        error: true,
        status: 401,
        data: 'Token is invalid! Authentication failed.'
      }
    }
  }
}

module.exports = tokenVerification