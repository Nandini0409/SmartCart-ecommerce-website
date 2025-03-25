import checkout from "./checkout.js";
import { cartUi, wishlistUi } from './dynamicUi.js'
import { displayNotification, mailListRequest } from "./module.js";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "./cart.js";
import { removeFromWishlist } from "./wishlist.js";
const notificationPopup = document.querySelector('.notificationPopup')

document.addEventListener('DOMContentLoaded', () => {
  loadComponent("header.html", "headerPlaceholder", headerEventListener);
  loadComponent("footer.html", "footerPlaceholder", footerEventListerners);
})

function loadComponent(file, containerId, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
      if (callback) { callback() }
    })
    .catch((error) => console.error(`Error loading ${file}:`, error))
}

const headerEventListener = () => {
  hamburgerMenu()
  displayCart()
  displayWishlist()
}

const hamburgerMenu = () => {
  document.getElementById('menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
}

const displayWishlist = () => {
  const wishlistBtn = document.getElementById('wishlist')
  const wishlistPopup = document.getElementById('wishlistPopup')
  let wishlist = JSON.parse(localStorage.getItem('wishlist'))
  if (!Array.isArray(wishlist)) {
    wishlist = []
  }

  wishlistBtn.addEventListener('click', () => {
    wishlist = JSON.parse(localStorage.getItem('wishlist'))
    wishlistPopup.style.display = 'flex';
    overlay.classList.add("active");
    wishlistUi(wishlist, wishlistPopup)
  })

  wishlistPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeBtns') || e.target.closest('.removeBtns')) {
      let itemArticleId = e.target.closest('article').id
      removeFromWishlist(itemArticleId)
    }
    wishlist = JSON.parse(localStorage.getItem('wishlist'))
    wishlistUi(wishlist, wishlistPopup)
    if (e.target.classList.contains('exitBtns') || e.target.closest('.exitBtns')) {
      wishlistPopup.style.display = 'none'
      overlay.classList.remove("active");
    }
  })
}

const displayCart = () => {
  const cartBtn = document.getElementById('cart')
  const cartPopup = document.getElementById('cartPopup')
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  if (!Array.isArray(cart)) {
    cart = []
  }
  let totalPrice = 0;
  cartBtn.addEventListener('click', () => {
    cart = JSON.parse(localStorage.getItem("cart")) || []
    cartPopup.style.display = 'flex';
    overlay.classList.add("active");
    totalPrice = cartUi(cart, cartPopup)
  })

  cartPopup.addEventListener('click', (e) => {
    cart = JSON.parse(localStorage.getItem("cart")) || []
    let itemId = e.target.parentElement.parentElement.id.split('article')[1]
    if (e.target.classList.contains('increaseBtns')) {
      increaseQuantity(itemId)
      displayNotification('Added to cart! You can continue shopping or view cart', notificationPopup)
    }
    else if (e.target.classList.contains('decreaseBtns')) {
      let quantity = document.querySelector(`#quantity${itemId}`).textContent
      decreaseQuantity(itemId, quantity)
    }
    else if (e.target.classList.contains('removeBtns') || e.target.closest('.removeBtns')) {
      console.log('hiiii')
      removeFromCart(itemId)
    }
    cart = JSON.parse(localStorage.getItem("cart")) || []
    totalPrice = cartUi(cart, cartPopup)

    if (e.target.classList.contains('exitBtns') || e.target.closest('.exitBtns')) {
      cartPopup.style.display = 'none'
      overlay.classList.remove("active");
    }
    document.getElementById('checkoutBtn').addEventListener('click', (e) => {
      e.preventDefault()
      checkout(totalPrice, notificationPopup)
    })
  })
}

const footerEventListerners = () => {
  backToTop()
  newsletterFormHandler()
}


const backToTop = () => {
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })
}

const newsletterFormHandler = async () => {
  const form = document.getElementById('newsletterForm')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const userEmail = e.target.email.value;
    const mailStatus = await mailListRequest({ email: userEmail }, 'newsletter')
    if (mailStatus === 422) {
      displayNotification('Provided email address is non-existent! Recheck your email address.', notificationPopup)
    }
    displayNotification('Thank you for subscribing! You"ll now receive the latest updates and exclusive offers directly in your inbox.', notificationPopup)
  })
}