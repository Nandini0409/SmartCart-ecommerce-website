import { addToWishlist, checkIfAdded } from './wishlist.js';
import { addToCart } from './cart.js';
import { getProducts } from './module.js';
import { createProductCard, createProductDetailCard } from './dynamicUi.js';

const productList = document.getElementById('productList')
const productDetails = document.getElementById('productDetails')
const params = new URLSearchParams(window.location.search)
const notificationPopup = document.querySelector('.notificationPopup')
let category = params.get('class')
console.log(notificationPopup)

document.addEventListener('DOMContentLoaded', async () => {
  const data = await getProducts(category)
  await showAllProducts(data)
})

const showAllProducts = async (data) => {
  productDetails.style.display = 'none'
  data.forEach(product => {
    createProductCard(product, productList)
  })
  let divArray = productList.querySelectorAll('div')
  for (const div of divArray) {
    const wishlistBtn = document.getElementById(`wishlist${div.id}`)
    const cartBtn = document.getElementById(`cart${div.id}`)
    const icon = div.querySelector('.heartIcon')
    let currentProduct = await showProductDetails(div, data)
    if (checkIfAdded(currentProduct.id)) {
      icon.classList.remove("far");
      icon.classList.add("fas");
    }
    else {
      icon.classList.remove("fas");
      icon.classList.add("far");
    }
    addToWishlist(currentProduct, wishlistBtn)
    addToCart(currentProduct, cartBtn, notificationPopup)
  }

}

const showProductDetails = async (div, data) => {
  const currentProduct = data.find(product => product.id === div.id)
  div.addEventListener('click', (e) => {
    window.history.pushState({}, '', `product.html?id=${div.id}`)
    productList.style.display = 'none'
    productDetails.style.display = 'flex'
    createProductDetailCard(currentProduct, productDetails)
    const icon = productDetails.querySelector('.heartIcon')
    const wishlistBtn = document.querySelector('.singleHeart')
    const cartBtn = document.querySelector(`.singleCartBtn`)
    addToWishlist(currentProduct, wishlistBtn)
    addToCart(currentProduct, cartBtn, notificationPopup)
    if (checkIfAdded(currentProduct.id)) {
      icon.classList.remove("far");
      icon.classList.add("fas");
    }
    else {
      icon.classList.remove("fas");
      icon.classList.add("far");
    }
  })
  return currentProduct
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

