let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

const removeFromWishlist = (productId) => {
  wishlist = wishlist.filter((product) => product.id !== productId)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  wishlistUiRender()
}

const checkIfAdded = (productId) => {
  return wishlist.some((item) => item.id === productId)
}

export function wishlistUiRender() {
  wishlist = JSON.parse(localStorage.getItem('wishlist'))
  console.log(wishlist)
  if (!Array.isArray(wishlist)) {
    wishlist = []
  }
  const popUp = document.getElementById('wishlistPopup')
  popUp.innerHTML = wishlist.map((product) => {
    return `<article id="${product.id}">
  <img src="${product.image}" alt="${product.name}">
  <p>${product.name}</p>
  <p>${product.price}</p>
  <button id="removeBtn${product.id}">X</button>
</article>`
  }).join('')
  wishlist.forEach((product) => {
    document.getElementById(`removeBtn${product.id}`).addEventListener('click', () => { removeFromWishlist(product.id) })
  });
}

export function addToWishlist(currentProduct, btn) {
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let isAdded = checkIfAdded(currentProduct._id)
    if (!isAdded) {
      wishlist = [...wishlist, {
        id: currentProduct._id,
        image: currentProduct.image,
        name: currentProduct.name,
        price: currentProduct.price
      }]
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
    else {
      wishlist = removeFromWishlist(currentProduct._id)
    }
  })
}








