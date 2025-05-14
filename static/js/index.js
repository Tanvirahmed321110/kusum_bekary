

// Open and close cart for mobile
const cartButton = document.getElementById('cart-btn')
cartButton.addEventListener('click', function () {
    document.getElementById('cart-sidebar').classList.toggle('active')
})
