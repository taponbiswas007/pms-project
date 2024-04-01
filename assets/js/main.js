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


$('.room1').on('click', function() {
   $("#reservationPersonDetailsOpen").toggle();
});
$('#reservationPersonDetailsClose').on('click', function() {
   $("#reservationPersonDetailsOpen").hide();
});

$("#bookingPage").click(function(){
    window.location.href = "booking-person-details.html";
});

    $(".headersearchBtn").click(function(){
        $(".popupinput").show();
    });
    $("#newReservation").click(function(){
        $(".overlay").fadeIn();
        $(".viabookingpopup-area").fadeIn();
    });
    $(".bookconfirm").click(function(){
        $(".overlay").fadeIn();
        $(".viabookingpopup-area").fadeIn();
    });

    $('.viabooking-item').click(function() {
        // Remove the class from all elements
        $('.viabooking-item').removeClass('viaselect');
    
        // Toggle the class for the clicked item
        $(this).addClass('viaselect');
    
        // Hide the checkmark from all elements
        $('.viabooking-item .checkmark').hide();
    
        // Show the checkmark for the clicked item
        $(this).find(".checkmark").show();
    });
    $('.payment-mathods-item').click(function() {
        // Remove the class from all elements
        $('.payment-mathods-item').removeClass('active-payment-method');
    
        // Toggle the class for the clicked item
        $(this).addClass('active-payment-method');
    
       
    });
    

    
    $("#applyButton").click(function(){
        var fromDate = formatDate($("#fromDate").val());
        var toDate = formatDate($("#toDate").val());
        $("#mainDateInput").val(fromDate + " - " + toDate);
        toggleDatePicker(); // Close the date picker after applying the date range
    });
      
});


function formatDate(dateString) {
    var date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return pad(day) + "/" + pad(month) + "/" + year;
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function toggleDatePicker() {
    var datePicker = document.getElementById("datePicker");
    if (datePicker.style.display === "block") {
        datePicker.style.display = "none";
    } else {
        datePicker.style.display = "block";
    }
}