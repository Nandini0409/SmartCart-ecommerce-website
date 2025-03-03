let cart = JSON.parse(localStorage.getItem('cart')) || []
import checkout from './checkout.js'


export function cartUiRender() {
  const popUp = document.getElementById('cartPopup')
  cart = JSON.parse(localStorage.getItem('cart')) || []
  if (!Array.isArray(cart)) {
    cart = []
  }
  let totalItems = cart.length
  let totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  popUp.innerHTML = `<h2>Shopping Cart</h2>
  <p>${totalItems} items</p>
  ${cart.map((product) => {
    return `<article>
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <div>
    <button id="increaseBtn${product.id}">+</button>
    <p>${product.quantity}</p>
    <button id="decreaseBtn${product.id}">-</button>
    </div>
    <button id="removeBtn${product.id}">x</button>
    </article>`
  }).join('')}
  <p>subtotal : ${totalPrice}</p>
  <button id="checkoutBtn">Checkout</button>`

  cart.forEach(product => {
    document.getElementById(`removeBtn${product.id}`).addEventListener('click', () => removeFromCart(product))
    document.getElementById(`increaseBtn${product.id}`).addEventListener('click', () => increaseQuantity(product))
    document.getElementById(`decreaseBtn${product.id}`).addEventListener('click', () => decreaseQuantity(product))
  })
  document.getElementById('checkoutBtn').addEventListener('click', (e) => {
    e.preventDefault()
    checkout(totalPrice)
  })
}

function removeFromCart(currentProduct) {
  cart = cart.filter((product) => product.id !== currentProduct.id)
  localStorage.setItem('cart', JSON.stringify(cart))
  cartUiRender()
}

function increaseQuantity(product) {
  cart.forEach((item) => {
    if (item.id === product.id) {
      item.quantity += 1
    }
  })
  localStorage.setItem('cart', JSON.stringify(cart))
  cartUiRender()
}

function decreaseQuantity(product) {
  if (product.quantity > 1) {
    cart.forEach((item) => {
      if (item.id === product.id) {
        item.quantity -= 1
      }
    })
  }
  else {
    removeFromCart(product)
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  cartUiRender()
}

const checkIfAlreadyAdded = (currentProduct) => {
  let product = cart.find((product) => product.id === currentProduct._id)
  return product
}

export function addToCart(currentProduct, btn) {
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    let productFoundInCart = checkIfAlreadyAdded(currentProduct)
    if (!productFoundInCart) {
      cart = [...cart, {
        id: currentProduct._id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        quantity: 1
      }]
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    else {
      increaseQuantity(productFoundInCart)
    }
  })
}
















