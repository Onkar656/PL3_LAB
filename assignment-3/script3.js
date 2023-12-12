// JavaScript for adding books to the cart

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");

let cartItems = 0;

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        cartItems++;
        cartCount.innerText = cartItems;
    });
});
