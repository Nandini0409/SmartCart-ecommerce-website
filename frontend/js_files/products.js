import {addToWishlist} from './wishlist.js';
import {addToCart} from './cart.js';

const productList = document.getElementById('product')
const params = new URLSearchParams(window.location.search)
let category = params.get('class')


document.addEventListener('DOMContentLoaded', async () => {
  console.log('hiii')
  const data = await getProducts()
  await showAllProducts(data)
  await showProductDetails(data)
})

const getProducts = async () => {
  try {
    const response = await fetch(`http://localhost:5000/products/${category}`)
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.message}`)
    }
    const data = await response.json()
    return data
  }
  catch {
    errorHandler()
  }
}

const showAllProducts = (data) => {
  productList.innerHTML = data.map(product => {
    return `<div id="${product._id}">
    <button id="wishlist${product._id}" class="wishlistBtn">Add to wishlist</button>
    <img src="images/products/${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button id="cart${product._id}">Add to cart</button>
    </div>`
  }).join('')
  productList.querySelectorAll('div').forEach(div => {
    const wishlistBtn = document.getElementById(`wishlist${div.id}`)
    const cartBtn = document.getElementById(`cart${div.id}`)
    const currentProduct = data.find(product => product._id === div.id)
    addToWishlist(currentProduct, wishlistBtn)
    addToCart(currentProduct, cartBtn)
  })
}

const showProductDetails = async (data) => {
  const productListChildern = Array.from(productList.querySelectorAll('div'))
  productListChildern.forEach(div => {
    const currentProduct = data.find(product => product._id === div.id)
    div.addEventListener('click', (e) => {
      window.history.pushState({}, '', `product.html?id=${div.id}`)
      productList.innerHTML = div.innerHTML + `
      <button>Buy Now</button>
      <p>${currentProduct.description.features}</p>
      <p>${currentProduct.description.deliveryInfo}</p>`
      const wishlistBtn = document.getElementById(`wishlist${currentProduct._id}`)
      const cartBtn = document.getElementById(`cart${currentProduct._id}`)
      addToWishlist(currentProduct, wishlistBtn)
      addToCart(currentProduct, cartBtn)
    })
  })
}


























window.addEventListener('popstate', async () => {
  if (window.location.search === `?class=${category}`) {
    const data = await getProducts()
    showAllProducts(data)
    window.history.replaceState({}, '', `products.html?class=${category}`)
    location.reload()
  }
})

const errorHandler = () => {
  console.log('error')
}

