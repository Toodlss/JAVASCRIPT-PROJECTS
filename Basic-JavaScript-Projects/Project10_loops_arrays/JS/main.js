function forLoop() {
    var Instruments = ["Guitar", "Drums", "Piano", "bass", "Violin", "trumpet", "Flute"];
    var Content = "";
    var Y;

    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }

    document.getElementById("list_of_Instruments").innerHTML = Content;
}

function showArray() {
    var Fruits = ["Apple", "Banana", "Cherry", "Orange", "Grapes"];

    document.getElementById("Array").innerHTML =
        "One of my favorite fruits is: " + Fruits[2];
}

function constant_function() {
    const Musical_Instrument = {
        type: "Guitar",
        brand: "Fender",
        color: "black",
        length: "20ft"
    };

    document.getElementById("Constant").innerHTML =
        "The instrument is a " + Musical_Instrument.color + " " +
        Musical_Instrument.brand + " " +
        Musical_Instrument.type + ".";
}

function let_example() {

    let message = "This was created using the let keyword.";

    document.getElementById("Let").innerHTML = message;
}

function objectMethodExample() {

    let Car = {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        description: function() {
            return this.year + " " + this.make + " " + this.model;
        }
    };

    document.getElementById("Object").innerHTML =
        "My car is a " + Car.description();
}

function countNumbers() {
    let i = 1;
    let text = "";

    while (i <= 10) {
        text += "Number: " + i + "<br>";
        i++;
    }

    document.getElementById("WhileLoop").innerHTML = text;
}