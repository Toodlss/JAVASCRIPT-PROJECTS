// typeof
var X = "Hello World";
document.getElementById("TypeOf").innerHTML = typeof X;

// Type coercion
document.getElementById("Coercion").innerHTML = "10" + 5;

// NaN
document.getElementById("NaN").innerHTML = 0 / 0;

// isNaN true
document.getElementById("TrueTest").innerHTML = isNaN("Hello");

// isNaN false
document.getElementById("FalseTest").innerHTML = isNaN("123");

// Infinity
document.getElementById("Infinity").innerHTML = 2E310;

// -Infinity
document.getElementById("NegativeInfinity").innerHTML = -2E310;

// Boolean true
document.getElementById("TrueTest2").innerHTML = (10 > 5);

// Boolean false
document.getElementById("FalseTest2").innerHTML = (5 > 10);

// Math operation in the console
console.log(25 + 17);

// Using == to return true
document.getElementById("EqualTrue").innerHTML = (10 == 10);

// Using == to return false
document.getElementById("EqualFalse").innerHTML = (10 == 5);

// === examples

// 1️⃣ True: same value AND same type
document.getElementById("StrictTrue").innerHTML = (10 === 10);

// 2️⃣ False: different value AND different type
document.getElementById("StrictFalse1").innerHTML = (10 === "5");

// 3️⃣ False: same value BUT different type
document.getElementById("StrictFalse2").innerHTML = (10 === "10");

// 4️⃣ False: different value BUT same type
document.getElementById("StrictFalse3").innerHTML = (10 === 5);

// AND (&&) operator
document.getElementById("AndTrue").innerHTML = (10 > 5 && 7 < 20);   // true
document.getElementById("AndFalse").innerHTML = (10 > 5 && 7 > 20);  // false

// OR (||) operator
document.getElementById("OrTrue").innerHTML = (10 > 5 || 7 > 20);    // true
document.getElementById("OrFalse").innerHTML = (10 < 5 || 7 > 20);   // false

// NOT (!) operator

// true because !false = true
document.getElementById("NotTrue").innerHTML = !(10 < 5);

// false because !true = false
document.getElementById("NotFalse").innerHTML = !(10 > 5);
