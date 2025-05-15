

// Open and close cart for mobile
const cartButton = document.getElementById('cart-btn')
cartButton.addEventListener('click', function () {
    document.getElementById('cart-sidebar').classList.toggle('active')
})


const myCartLaptopBtn = document.getElementById('my-cart-laptop')

if (myCartLaptopBtn) {
    myCartLaptopBtn.addEventListener('click', function () {
        document.getElementById('cart-sidebar').classList.toggle('laptop')
    })
}