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

    
    $('.infolabel').on('click', function() {
       
      //  $(".info-input-box").css("border", "3px solid #003087");

        $(this).animate({
            "top": "-8px",
            "left": "76px",
            "background": "#F5F5F5",
            "height": "15px",
            "padding-top": "8px",
            "margin-right": "0",
            "width": "120px",
        }, 300);
    });
    
    $('.info-input-box').each(function() {
        $(this).click(function() {
            $(this).css('border-color', '#003087');
        });
    });


$('.room1').on('click', function() {
   $("#reservationPersonDetailsOpen").toggle();
});
$('#reservationPersonDetailsClose').on('click', function() {
   $("#reservationPersonDetailsOpen").hide();
});
$('#profile').on('click', function() {
   $("#profileOption").slideToggle();
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
    $(".closeBtn").click(function(){
        $(".overlay").fadeOut();
        $(".viabookingpopup-area").fadeOut();
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
    

    //for main page
    $("#applyButton").click(function(){
        var fromDate = formatDate($("#fromDate").val());
        var toDate = formatDate($("#toDate").val());
        $("#mainDateInput").val(fromDate + " - " + toDate);
        toggleDatePicker(); // Close the date picker after applying the date range
    });

    //for popup page
    $("#applyButtonpopup").click(function(){
        var fromDate = formatDatepopup($("#fromDatepopup").val());
        var toDate = formatDatepopup($("#toDatepopup").val());
        $("#mainDateInputpopup").val(fromDate + " - " + toDate);
        toggleDatePickerpopup(); // Close the date picker after applying the date range
    });
      
});
//for main page
function formatDate(dateString) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = new Date(dateString);
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    return pad(day) + " " + month + " " + year;
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

//for popup page
function formatDatepopup(dateString) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = new Date(dateString);
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    return pad(day) + " " + month + " " + year;
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}


function toggleDatePickerpopup() {
    var datePickerpopup = document.getElementById("datePickerpopup");
    if (datePickerpopup.style.display === "block") {
        datePickerpopup.style.display = "none";
    } else {
        datePickerpopup.style.display = "block";
    }
}


window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    if (window.scrollY > 0) {
        footer.classList.add('footer-hidden');
    } else {
        footer.classList.remove('footer-hidden');
    }
});
