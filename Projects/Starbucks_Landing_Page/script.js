function imgSlider(img) {
    document.querySelector(".starbucks").src = img;
}
function changeCircleColor(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
}
function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}
function themeSwitch() {
    const themeSwitch = document.querySelector(".themeSwitch");
    const body = document.querySelector("body");
    themeSwitch.classList.toggle("active");
    body.classList.toggle("dark");
}
