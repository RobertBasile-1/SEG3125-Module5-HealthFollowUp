const setDateFormat = "mm/dd/yy";
var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];


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


function addHyphen(element) {
    let ele = document.getElementById(element.id);
    ele = ele.value.split('-').join(''); // Remove dash (-) if mistakenly entered.

    let finalVal = ele.match(/\d{3}(?=\d{2,3})|\d+/g).join('-');
    document.getElementById(element.id).value = finalVal;
}

function addHyphenForCard(element) {
    let ele = document.getElementById(element.id);
    ele = ele.value.split('-').join(''); // Remove dash (-) if mistakenly entered.

    let finalVal = ele.match(/.{1,4}/g).join('-');
    document.getElementById(element.id).value = finalVal;
}

$(document).ready(function() {

    /* Credit for the if statement logic and animation to this website */
    /*https://deepmikoto.com/coding/3--how-to-create-back-to-top-button-using-jquery-and-some-css*/


    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() - 200 > 0) {
                $("#warning").slideDown(); // show the button
            } else {
                $("#warning").slideUp();
            }
        });
    });


    //back to the top
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


    function validatePhone(phone) {

        var filter = new RegExp("^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$");
        if (!filter.test(phone)) {

            return false;

        } else {
            return true;

        }

    }





    $(function() {
        $("#book-btn").on("click", function() {
            var forms = $(".needs-validation");

            Array.prototype.slice.call(forms).forEach(function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {

                        var smt = validatePhone($("#" + forms[0][2].id).val());
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        localStorage.setItem("doctors", $("#doctors option").filter(':selected').text());
                        localStorage.setItem("date", $("#dateApp").val());

                        form.classList.add("was-validated");

                    },
                    false
                );
            });
        });
    });
    /*Boostrap*/


    $(function() {
        $("#dateApp").datepicker({
            minDate: 1,
            maxDate: "4M+",
            beforeShowDay: disableDates,
            showAnim: "slideDown",
        });
    });
});