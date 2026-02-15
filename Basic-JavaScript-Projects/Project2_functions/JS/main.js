// This function will run when the button is clicked
function displayMessage() {

    // Assigning two variables with string values
    var part1 = "Learning JavaScript is ";
    var part2 = "actually pretty fun!";

    // Concatenating the two variables together
    var fullMessage = part1 + part2;

    // Using document.getElementById to target the paragraph
    // and change its text content
    document.getElementById("output").innerHTML = fullMessage;
}

function addText() {

    // Create a variable with an initial string value
    var sentence = "JavaScript is powerful";

    // Use the += operator to concatenate additional text
    sentence += " and easy to learn!";

    // Display the concatenated result using getElementById
    document.getElementById("message").innerHTML = sentence;
}
