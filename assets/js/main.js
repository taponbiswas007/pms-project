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

   /*
    $('.infolabel').on('click', function() {
       
        $(this).animate({
            "top": "-15px",
            "left": "10px",
            "background": "#F5F5F5",
            "height": "15px",
            "padding-top": "8px",
            "margin-right": "0",
            "width": "120px",
            "border-radius": "0",
        }, 300);
    });
    
    */
  
    var $prevClickedLabel = null;

    $('.infolabel').on('click', function() {
           
        // If there was a previously clicked label, revert its styles
        if ($prevClickedLabel !== null) {
            var $prevInputField = $prevClickedLabel.closest('.info-input-box').find('input');
            $prevClickedLabel.animate({
              
                "top": "-15px",
                "left": "10px",
                "background": "#F5F5F5",
                "height": "15px",
                "padding-top": "8px",
                "margin-right": "0",
                "width": "120px",
                "border-radius": "0"
            },300);
            
            // Only revert input field styles if it's empty
            if ($prevInputField.val().trim() === '') {
                $prevClickedLabel.animate({
                    "top": "0",
                    "left": "0",
                    "color": "#000",
                    "background": "#ffffff",
                    "width": "100%",
                    "height": "100%",
                    "border-radius": "8px",
                    "padding-top": "10px",
                    "margin-right": "1px"
                },300);
            }
        }
        
        // Apply the new CSS styles to the current label
       
        $(this).animate({
            "top": "-15px",
            "left": "10px",
            "background": "#F5F5F5",
            "height": "15px",
            "padding-top": "8px",
            "margin-right": "0",
            "width": "120px",
            "border-radius": "0"
        },300);
        
        
        // Set the current label as the previously clicked label
        $prevClickedLabel = $(this);
    });
    
    
    


    $('.info-input-box').each(function() {
        var clickedOnce = false;
    
        $(this).click(function() {
            // If this is the first click, apply border color and set clickedOnce to true
            if (!clickedOnce) {
                $('.info-input-box').css('border-color', '#202020');
                $(this).css('border-color', '#003087');
                clickedOnce = true;
            } else {
                // Check if there is any input text
                var inputText = $(this).find('input').val();
                if (inputText.trim() === '') {
                    $(this).css('border-color', '#202020');
                }
            }
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
