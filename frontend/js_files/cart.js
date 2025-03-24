let cart = JSON.parse(localStorage.getItem('cart')) || []

export function removeFromCart(id) {
  cart = cart.filter((product) => product.id !== id)
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function increaseQuantity(id) {
  cart.forEach((item) => {
    if (item.id === id) {
      item.quantity += 1
    }
  })
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function decreaseQuantity(id, quantity) {
  if (quantity > 1) {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity -= 1
      }
    })
  }
  else {
    cart = cart.filter((item) => item.id !== id)
    removeFromCart(id)
  }
  localStorage.setItem('cart', JSON.stringify(cart))
}

const checkIfAlreadyAdded = (currentProduct) => {
  let product = cart.find((product) => product.id === currentProduct.id)
  return product
}

export function addToCart(currentProduct, btn) {
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    let productFoundInCart = checkIfAlreadyAdded(currentProduct)
    if (!productFoundInCart) {
      try {
        cart = [...cart, {
          id: currentProduct.id,
          name: currentProduct.name,
          price: currentProduct.price,
          image: currentProduct.image,
          quantity: 1
        }]
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      catch (e) {
        console.log(e)
      }
    }
    else {
      increaseQuantity(productFoundInCart.id)
    }
  })
}












