let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

export function removeFromWishlist (productId, icon){
  console.log(productId)
  wishlist = wishlist.filter((product) => product.id !== productId)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  if(icon){
    icon.classList.remove("fas");
    icon.classList.add("far");
  }
}

export function checkIfAdded(productId){
  return wishlist.some((item) => item.id === productId)
}

export function addToWishlist(currentProduct, btn) {
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let isAdded = checkIfAdded(currentProduct.id)
    const icon = btn.querySelector(".heartIcon");
    console.log(icon)
    if (!isAdded) {
      wishlist = [...wishlist, {
        id: currentProduct.id,
        image: currentProduct.image,
        name: currentProduct.name,
        price: currentProduct.price
      }]
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      icon.classList.remove("far");
      icon.classList.add("fas");
    }
    else {
      removeFromWishlist(currentProduct.id, icon)    
    }
  })
}











