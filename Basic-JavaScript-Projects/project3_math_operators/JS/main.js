function additionFunction() {

    // Perform an addition operation
    var result = 10 + 5;

    // Return the result to the paragraph with id "Math"
    document.getElementById("Math").innerHTML = "10 + 5 = " + result;
}

// Subtraction function (NEW)
function subtractionFunction() {

    // Perform a subtraction operation
    var result = 20 - 7;

    // Display the result in the paragraph with id "Math"
    document.getElementById("Math").innerHTML = "20 - 7 = " + result;
}

// Multiplication function
function multiplicationFunction() {

    // Perform multiplication
    var result = 6 * 4;

    // Display result
    document.getElementById("Math").innerHTML = "6 × 4 = " + result;
}

// Division function
function divisionFunction() {

    // Perform division
    var result = 24 / 6;

    // Display result
    document.getElementById("Math").innerHTML = "24 ÷ 6 = " + result;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML =
        "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML =
        "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;

    document.getElementById("Math").innerHTML = -x;
}

function increment_Operator() {
    var X = 5;
    X++;
    document.getElementById("Math").innerHTML = X;
}

window.alert(Math.floor(Math.random() * 100));
window.alert(Math.sqrt(144));