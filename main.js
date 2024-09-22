let slideIndex = 0;
let timer;

function showSlides(index) {
    let slides = document.getElementsByClassName("banner-slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0 || dots.length === 0) {
        console.error("Nenhum slide ou ponto encontrado.");
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active-dot");
    }

    slideIndex = (index >= slides.length) ? 0 : (index < 0) ? slides.length - 1 : index;

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active-dot");

    clearTimeout(timer);
    timer = setTimeout(() => showSlides(slideIndex + 1), 7000);
}

function currentSlide(n) {
    showSlides(n - 1);
}


showSlides(slideIndex);

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    console.log("Rolando:", document.body.scrollTop, document.documentElement.scrollTop);
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

window.onscroll = function () {
    scrollFunction();
};

document.getElementById("scrollToTopBtn").onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
