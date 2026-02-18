let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Change image every 7 seconds
    setTimeout(showSlides, 7000);
}

// This variable stores how many seconds are left
var timeLeft = 7;

// This function runs the countdown
function countdown() {

    // Display the current time remaining on the page
    document.getElementById("timer").innerHTML = 
        "Time remaining: " + timeLeft + " seconds";

    // Decrease the time by 1 each time the function runs
    timeLeft--;

    // When the countdown reaches 0, stop the timer
    if (timeLeft < 0) {
        clearInterval(timerInterval); // Stops the countdown
        document.getElementById("timer").innerHTML = 
            "Time's up!";
    }
}

// This calls the countdown() function every 1 second (1000 milliseconds)
var timerInterval = setInterval(countdown, 1000);
