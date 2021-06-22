const setDateFormat = "mm/dd/yy";
var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];

// var Sammy = {
//     name: "Sammy",
//     value: 1,
//     dayOff: [2, 4],
// };
// var Ilnius = {
//     name: "Ilnius",
//     value: 2,
//     dayOff: [1, 3, 5],
// };
// var Patrick = {
//     name: "Patrick",
//     value: 3,
//     dayOff: [3, 4],
// };

function disableDates(date) {
    let val = document.getElementById("doctors").value;
    let dayVar = [];

    if (val === "1") {
        dayVar = [2, 4];
    } else if (val === "2") {
        dayVar = [1, 3, 5];
    } else if (val === "3") {
        dayVar = [3, 4];
    }

    // Sunday is Day 0, disable all Sundays
    if (dayVar.includes(date.getDay())) {
        return [false, ""];
    } else {
        return [true, ""];
    }
}

// var therapist = document.getElementById("doctors").value;

// var dayOFF;
// if (therapist == Sammy.value) {
//     dayOFF = Sammy.dayOff;
// } else if (therapist == Ilnius.value) {
//     dayOFF = Ilnius.dayOff;
// } else if (therapist == Patrick.value) {
//     dayOFF = Patrick.dayOff;
// }

// if (date.getDay() == 0 || dayOFF.includes(date.getDay()))
//     return [false];

// var string = jQuery.datepicker.formatDate(setDateFormat, date);
// return [unavailableDates.indexOf(string) == -1]
// }

$(document).ready(function() {
    /* Credit for the if statement logic and animation to this website */
    /*https://deepmikoto.com/coding/3--how-to-create-back-to-top-button-using-jquery-and-some-css*/
    $("#book-btn").on("click", function() {
        something();
    });

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() - 200 > 0) {
                $("#warning").slideDown(); // show the button
            } else {
                $("#warning").slideUp();
            }
        });
    });

    $(function() {
        // previous detection logic

        $("#warning").on("click", function() {
            $("html, body").animate({
                    scrollTop: 0,
                },
                200
            );
        });
    });


    /*Boostrap*/
    function something() {
        var forms = $(".needs-validation");
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function(form) {
            form.addEventListener(
                "submit",
                function(event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add("was-validated");
                },
                false
            );
        });
    }

    $(function() {
        $("#dateApp").datepicker({
            minDate: 1,
            maxDate: "4M+",
            beforeShowDay: disableDates,
            showAnim: "slideDown",
        });
    });
});