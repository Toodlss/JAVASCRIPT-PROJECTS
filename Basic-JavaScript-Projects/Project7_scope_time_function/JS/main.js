// ✅ Global variable
var X = 10;

function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

// ✅ Local variable
function Add_numbers_2() {
    var Y = 5;
    document.write(20 + Y + "<br>");
}

// ❌ Intentional error for debugging
function Add_numbers_3() {
    console.log(20 + Y); // Y is not defined here
}

// ✅ Time-of-day function
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12) {
        Reply = "It is morning time!";
    }
    else if (Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }

    document.getElementById("Time_Message").innerHTML = Reply;
}

function Check_Number() {
    var Number = 15;

    if (Number > 10) {
        document.getElementById("Number_Result").innerHTML = "The number is greater than 10.";
    }
}

function Age_Check() {
    var Age = document.getElementById("User_Age").value;
    var Message;

    if (Age >= 18) {
        Message = "You are old enough to vote.";
    } else {
        Message = "You are not old enough to vote.";
    }

    document.getElementById("Age_Result").innerHTML = Message;
}
