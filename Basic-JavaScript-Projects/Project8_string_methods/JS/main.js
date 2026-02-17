function Full_Sentence() {
    var Part_1 = "I am learning ";
    var Part_2 = "JavaScript ";
    var Part_3 = "and it is ";
    var Part_4 = "fun!";

    var Whole_Sentence = Part_1.concat(Part_2, Part_3, Part_4);

    document.getElementById("Concatenate").innerHTML = Whole_Sentence;
}

function Slice_Method() {
    var Sentence = "Learning JavaScript is very fun and powerful.";
    var Section = Sentence.slice(9, 19);

    document.getElementById("Slice_Result").innerHTML = Section;
}

function String_Method() {
    var Number = 182;
    document.getElementById("String_Result").innerHTML = Number.toString();
}

function Precision_Method() {
    var Number = 12938.3012987376112;
    var Result = Number.toPrecision(10);

    document.getElementById("Precision_Result").innerHTML = Result;
}
