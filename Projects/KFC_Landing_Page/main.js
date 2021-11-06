const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
i = 0;

function activeSlide(n) {
    for (let slide of slides) {
        slide.classList.remove("active");
        slides[n].classList.add("active");
    }
}

next.addEventListener("click", function () {
    if (i == slides.length - 1) {
        i = 0;
        activeSlide(i);
    } else {
        i++;
        activeSlide(i);
    }
});

prev.addEventListener("click", function () {
    if (i == 0) {
        i = slides.length - 1;
        activeSlide(i);
    } else {
        i--;
        activeSlide(i);
    }
});

function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}
