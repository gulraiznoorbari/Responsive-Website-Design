let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector(".shopping-cart");
let loginForm = document.querySelector(".login-form");
let menuBtn = document.querySelector(".navbar");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    menuBtn.classList.remove("active");
};
document.querySelector("#cart-btn").onclick = () => {
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    menuBtn.classList.remove("active");
};
document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    menuBtn.classList.remove("active");
};
document.querySelector("#menu-btn").onclick = () => {
    menuBtn.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
};
window.onscroll = () => {
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    menuBtn.classList.remove("active");
};
