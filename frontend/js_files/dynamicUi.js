
export function createProductCard(product, productList) {
  let productCard = document.createElement("div")
  productCard.setAttribute('id', product.id)
  productCard.innerHTML = `<button id="wishlist${product.id}" class="wishlistBtn allHeart">
  <i class="heartIcon far fa-heart" style="color:#005dc0"></i></button>
  <img width="250px" height="auto" class="productListImg" src="./images/serum.webp" alt="${product.name}">
  <h3>${product.name}</h3>
  <p>$${product.price}</p>
  <button class="cartBtn" id="cart${product.id}">Add to cart</button>`
  productList.append(productCard)
}

export function createProductDetailCard(product, productDetails) {
  let productDetailCard = document.createElement("article")
  productDetailCard.innerHTML = `<div class="productImageContainer"><button class="wishlistBtn singleHeart"><i class="heartIcon far fa-heart" style="color: #0179fd;"></i></button>
  <img class="productListImg" src="${product.image}" alt="${product.name}">
  </div>
  <div class="productDetailContainer">
  <div>
  <h3>${product.name}</h3>
  <p><span>Description:</span> ${product.description.features}</p>
  <p><span>${product.price} Rs</span></p>
  </div>
  <button class="cartBtn singleCartBtn" id="cart${product.id}">Add to cart</button>
  <p>${product.description.deliveryInfo}</p>`
  productDetails.append(productDetailCard)
}


export function cartUi(cart, popup) {
  let totalItems = cart.length
  let totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  totalPrice = (Math.round(totalPrice * 100) / 100)

  popup.innerHTML = `<h4>Your Cart[${totalItems} items]</h4><button id="cartExitBtn" class="exitBtns"><i class="fa-solid fa-xmark"></i></button><div id="cartItemList"></div><div id="orderSummary"><p>subtotal : ${totalPrice}</p><button class="cartBtnHover" id="checkoutBtn">Checkout</button></div>`

  

  cart.forEach((product) => {
    let cartItemList = document.querySelector('#cartItemList')
    cartItemUi(product, cartItemList)
  })
  return totalPrice
}

function cartItemUi(product, cartItemList) {
  let cartItem = document.createElement("article")
  cartItem.setAttribute("id", `article${product.id}`)
  cartItem.setAttribute("class", `cartItems`)
  cartItem.innerHTML = `<img src="${product.image}" alt="${product.name}">
  <h3>${product.name}</h3>
  <p>${product.price} Rs</p>
  <div id="quantityBtns">
  <button class="increaseBtns btns">+</button>
  <p id="quantity${product.id}">${product.quantity}</p>
  <button class="decreaseBtns btns">-</button>
  </div>
  <button class="removeBtns btns"><i class="fa-solid fa-xmark"></i></button>`
  cartItemList.append(cartItem)
}

export function wishlistUi(wishlist, popup) {
  popup.innerHTML = `<h4>Your Wishlist</h4><button id="wishlistExitBtn" class="exitBtns"><i class="fa-solid fa-xmark"></i></button><div id=wishlistItemList></div>`
  wishlist.forEach((product) => {
    let wishlistItemList = document.getElementById('wishlistItemList')
    wishlistItemUi(product, wishlistItemList)
  })
}

export function wishlistItemUi(product, wishlistItemList) {
  let itemCard = document.createElement("article")
  itemCard.setAttribute("id", `${product.id}`)
  itemCard.innerHTML = `<img src="./images/serum.webp" alt="${product.name}">
  <p>${product.name}</p>
  <p>${product.price}</p>
  <button class="removeBtns"><i class="fa-solid fa-xmark"></i></button>`
  wishlistItemList.append(itemCard)
}












































