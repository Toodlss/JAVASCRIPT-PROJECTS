// TERNARY OPERATOR FUNCTION
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = (Height >= 52) ? 
        "You are tall enough" : 
        "You are too short";

    document.getElementById("Ride").innerHTML =
        Can_ride + " to ride.";
}


// CONSTRUCTOR FUNCTION
function Car(Make, Model, Year, Color) {
    this.Car_Make = Make;
    this.Car_Model = Model;
    this.Car_Year = Year;
    this.Car_Color = Color;
}


// USING THE "new" KEYWORD
var MyCar = new Car("Toyota", "Camry", 2022, "Blue");


// DISPLAY FUNCTION
function displayCar() {
    document.getElementById("New_and_This").innerHTML =
        "I drive a " + MyCar.Car_Color + " " +
        MyCar.Car_Model + " made in " + MyCar.Car_Year + ".";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();

    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}