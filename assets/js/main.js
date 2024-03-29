$(document).ready(function(){
    $(".toggle-bar").click(function(){
        $(".bottom-header").slideToggle();
        $(".bars").toggle();
        $(".close").toggle();
    });
    $('#show-more').on('click', function() {
        $('.doubleroom-row').toggle();
        
        var isVisible = $('.doubleroom-row').is(':visible');
        
        if (isVisible) {
            $(".down-arrow").css("transform", "rotate(180deg)");
        } else {
            $(".down-arrow").css("transform", "rotate(0deg)");
        }
    });
    $('#show-moreFamillyRoom').on('click', function() {
        $('.famillyroom-row').toggle();
        
        var isVisible = $('.famillyroom-row').is(':visible');
        
        if (isVisible) {
            $(".down-arrow2").css("transform", "rotate(180deg)");
        } else {
            $(".down-arrow2").css("transform", "rotate(0deg)");
        }
    });
    $('#show-morestandardRoom').on('click', function() {
        $('.standardroom-row').toggle();
        
        var isVisible = $('.standardroom-row').is(':visible');
        
        if (isVisible) {
            $(".down-arrow3").css("transform", "rotate(180deg)");
        } else {
            $(".down-arrow3").css("transform", "rotate(0deg)");
        }
    });

    $('#room1 td:nth-child(n+4):nth-child(-n+4)::after').attr('id', 'roomOneperson');


   
    $('#roomOneperson').click(function() {
        $("#reservationPersonDetailsOpen").show();
    });
    $(".headersearchBtn").click(function(){
        $(".popupinput").show();
    });

    $('.viabooking-item').click(function() {
        $("#reservationPersonDetailsOpen").show();
    });
    $(".headersearchBtn").click(function(){
        $(".popupinput").show();
    });
    
      
});
