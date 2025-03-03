import { cartUiRender } from "./cart.js"
import {wishlistUiRender} from "./wishlist.js"

document.addEventListener('DOMContentLoaded', ()=>{
  const wishlistBtn = document.getElementById('wishlist')
  const cartBtn = document.getElementById('cart')
  cartBtn.addEventListener('click',cartUiRender)
  wishlistBtn.addEventListener('click', wishlistUiRender)
})

