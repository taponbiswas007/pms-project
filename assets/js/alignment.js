$(document).ready(function () {

    $('.alignment-button').click(function () {
        $('.alignment-button').removeClass('alignmentactive'); // Remove active class from all buttons
        $(this).addClass('alignmentactive'); // Add active class to clicked button
    });
    $(".horizontal-button").click(function () {
        $(".verical-check-in-content").css({
            "display": "column"
        });
        $(".vertical-content-item").css({
            "width": "100%"
        });
        $(".vertical-content-body").css({
            "flex-direction": "row",
            "height": "fit-content",
            "column-gap": "10px",
            "row-gap": "10px"
        });
    });
    $(".vertical-button").click(function () {
        $(".verical-check-in-content").css({
            "flex-direction": " row"
        });
        $(".vertical-content-item").css({
            "width": " 344px "
        });
        $(".vertical-content-body").css({
            "flex-direction": " column ",
            "height": "550px ",
            "column-gap": "10px",
            "row-gap": "10px"
        });
    });
    $(".arival-alignment-button").click(function () {
        $(".arival-vertical").toggle();
        $(".arival-horizontal").toggle();
    });
    $(".inhouse-alignment-button").click(function () {
        $(".inhouse-vertical").toggle();
        $(".inhouse-horizontal").toggle();
    });
    $(".departure-alignment-button").click(function () {
        $(".departure-vertical").toggle();
        $(".departure-horizontal").toggle();
    });
    $(".housekeeping-alignment-button").click(function () {
        $(".housekeeping-vertical").toggle();
        $(".housekeeping-horizontal").toggle();
    });
   

    $('.addtaskbtn').click(function() {
        // Toggle the popup visibility
        $('.task-popup').slideToggle();

        // Toggle the icon class
        $(this).find('.angleicon').toggleClass('fa-angle-up fa-angle-down');
    });

    $('.task-popup button').click(function() {
        // Get the button text
        var buttonText = $(this).text();

        // Replace the addtaskbtn text with the clicked button text and icon
        $('.addtaskbtn').html(buttonText + '<i class=" angleicon fa-solid fa-angle-up"></i>');

        // Hide the popup
        $('.task-popup').hide();

        // Reset the icon to fa-angle-up
        $('.angleicon').removeClass('fa-angle-down').addClass('fa-angle-up');
    });

    // Hide the task-popup if clicked outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.add-task-area').length) {
            $('.task-popup').hide();
            $('.angleicon').removeClass('fa-angle-down').addClass('fa-angle-up');
        }
    });
});
//"verical-check-in-content"