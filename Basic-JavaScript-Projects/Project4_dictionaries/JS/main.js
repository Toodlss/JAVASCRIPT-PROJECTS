function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Brown",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };

    delete Animal.Sound; // Deletes the Sound key

    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
