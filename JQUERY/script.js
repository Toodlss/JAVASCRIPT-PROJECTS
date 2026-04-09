$(document).ready(function () {

    //The shineloop function uses the chaining technique to
    // utilize multiple animate event methods in the same function
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };

    //set interval will repeat the shine function
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrolled down
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    })

    //trigger the images to show
    $("#classicCars").on({
        mouseenter: function () {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //trigger images to hide
        mouseleave: function () {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking
    //each element's sibling so they don't all display when
    //one question is clicked
    $('div.question').on('click', function () {
        $(this).next().slideToggle('slow');
    });

    // Event setup using a convenience method
    $("div.question").click(function () {
        console.log("You clicked a paragraph!");
    });

    let clicked = false;

    $("div.question").click(function () {
        if (!clicked) {
            alert("You clicked a question!");
            clicked = true;
        }
    });
})