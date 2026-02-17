let slidePosition = 1;
showSlides(slidePosition);

function changeSlide(n) {
    showSlides(slidePosition += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slidePosition = 1;
    }

    if (n < 1) {
        slidePosition = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slidePosition - 1].style.display = "block";
}