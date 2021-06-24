window.addEventListener('load', () => {

    $("#information").html("Thank you for booking your appointment with " + localStorage.getItem("doctors") + " on " + localStorage.getItem("date") + " at ");
    // localStorage.removeItem("doctors");
    // localStorage.removeItem("date");
});

// $(document).ready(function() {
//     $("#bakcHome").on('click', function() {
//         localStorage.clear();

//     });
// });