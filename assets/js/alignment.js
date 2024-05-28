$(document).ready(function () {
   
    $('.alignment-button').click(function () {
        $('.alignment-button').removeClass('alignmentactive'); // Remove active class from all buttons
        $(this).addClass('alignmentactive'); // Add active class to clicked button
    });
    $(".horizontal-button").click(function(){
        $(".verical-check-in-content").css({"display":"column"});
        $(".vertical-content-item").css({"width":"100%"});
        $(".vertical-content-body").css({
            "flex-direction":"row",
            "height":"430px",
            "column-gap":"10px",
            "row-gap":"10px"
        });
    });
    $(".vertical-button").click(function(){
        $(".verical-check-in-content").css({"flex-direction":" row"});
        $(".vertical-content-item").css({"width":" 344px "});
        $(".vertical-content-body").css({
            "flex-direction":" column ",
            "height":"550px ",
            "column-gap":"10px",
            "row-gap":"10px"
        });
    });
    $(".arival-alignment-button").click(function(){
        $(".arival-vertical").toggle();
    $(".arival-horizontal").toggle();
    });
    $(".inhouse-alignment-button").click(function(){
        $(".inhouse-vertical").toggle();
    $(".inhouse-horizontal").toggle();
    });
    $(".departure-alignment-button").click(function(){
        $(".departure-vertical").toggle();
    $(".departure-horizontal").toggle();
    });
});
//"verical-check-in-content"