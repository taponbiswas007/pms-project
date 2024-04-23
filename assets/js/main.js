$(document).ready(function () {
    $(".toggle-bar").click(function () {
        $(".bottom-header").slideToggle();
        $(".bars").toggle();
        $(".close").toggle();
    });
    $('#show-more').on('click', function () {
        $('.doubleroom-row').toggle();

        var isVisible = $('.doubleroom-row').is(':visible');

        if (isVisible) {
            $(".down-arrow").css("transform", "rotate(180deg)");
        } else {
            $(".down-arrow").css("transform", "rotate(0deg)");
        }
    });
    $('#show-moreFamillyRoom').on('click', function () {
        $('.famillyroom-row').toggle();

        var isVisible = $('.famillyroom-row').is(':visible');

        if (isVisible) {
            $(".down-arrow2").css("transform", "rotate(180deg)");
        } else {
            $(".down-arrow2").css("transform", "rotate(0deg)");
        }
    });
    $('#show-morestandardRoom').on('click', function () {
        $('.standardroom-row').toggle();

        var isVisible = $('.standardroom-row').is(':visible');

        if (isVisible) {
            $(".down-arrow3").css("transform", "rotate(180deg)");
        } else {
            $(".down-arrow3").css("transform", "rotate(0deg)");
        }
    });

    $('.todayhousekeepingstatus-header').on('click', function () {
        var $status = $(this).next('.todaystatus');
        $status.slideToggle();
        var $arrow = $(this).find(".down-arrow3");
        if ($arrow.css("transform") === 'none') {
            $arrow.css("transform", "rotate(180deg)");
        } else {
            $arrow.css("transform", "");
        }
    });


var $prevClickedLabel = null;

$('.infolabel').on('click', function () {
    var $inputField = $(this).closest('.info-input-box').find('input, select');
    if ($inputField.length === 0) {
        return;
    }

    // Stop ongoing animations before starting new ones
    $('.infolabel').stop(true, true);
    
    $('.info-input-box').css('border-color', '#202020');
    $(this).closest('.info-input-box').css('border-color', '#003087');

    if ($prevClickedLabel !== null && $prevClickedLabel[0] !== this) {
        var $prevInputField = $prevClickedLabel.closest('.info-input-box').find('input, select');
        var isPrevSelect = $prevInputField.is('select');
        if (isPrevSelect) {
            $prevClickedLabel.animate({
                "top": "-15px",
                "left": "10px",
                "background": "#F5F5F5",
                "height": "15px",
                "padding-top": "8px",
                "margin-right": "0",
                "border-radius": "0",
                "width":"120px"
            }, 300);
        } else {
            if ($prevInputField.val().trim() === '') {
                $prevClickedLabel.animate({
                    "top": "0",
                    "left": "0",
                    "color": "#000",
                    "background": "#ffffff",
                    "height": "100%",
                    "border-radius": "8px",
                    "padding-top": "15px",
                    "margin-right": "1px",
                    "z-index": "1",
                    "width":"100%"
                }, 300);
            }
        }
    }

    $(this).animate({
        "top": "-15px",
        "left": "10px",
        "background": "#F5F5F5",
        "height": "15px",
        "padding-top": "8px",
        "margin-right": "0",
        "border-radius": "0",
         "width":"120px"
    }, 300);

    $prevClickedLabel = $(this);

    $inputField.eq($inputField.index(this) + 1).focus();
    $(this).data('clicked', true);
});

// Unbind and rebind event handlers to prevent multiple bindings
$('.person-info-item input, .person-info-item select').off('keydown').on('keydown', function (e) {
    if (e.which === 9) { // Tab key
        e.preventDefault();
        var $nextInputField = $(this).closest('.person-info-item').nextAll('.person-info-item').find('input, select').first();
        if ($nextInputField.length !== 0) {
            var $infolabel = $nextInputField.closest('.person-info-item').find('.infolabel').first();
            $infolabel.data('clicked', false); // Reset clicked status
            $infolabel.click();
        }
    }
});

$('.card-details-item input, .card-details-item select').off('keydown').on('keydown', function (e) {
    if (e.which === 9) { // Tab key
        e.preventDefault();
        var $nextInputField = $(this).closest('.card-details-item').nextAll('.card-details-item').find('input, select').first();
        if ($nextInputField.length !== 0) {
            var $infolabel = $nextInputField.closest('.card-details-item').find('.infolabel').first();
            $infolabel.data('clicked', false); // Reset clicked status
            $infolabel.click();
        }
    }
});


    //select box design area start
    $('.info-input-box').each(function () {
        var $this = $(this);
        var isSelectManuVisible = false; // Track visibility state
    
        $this.find('.selectbox').click(function () {
            $this.find('.select-manu').slideToggle();
            isSelectManuVisible = !isSelectManuVisible; // Toggle visibility state
            toggleArrow();
        });
    
        $this.find('.select-manu li').click(function () {
            var selectedValue = $(this).text();
            $this.find('.selectbox').val(selectedValue);
            $this.find('.select-manu').hide();
            isSelectManuVisible = false; // Update visibility state
            toggleArrow();
        });
    
        $this.find('.downarrowbtn').click(function () {
            $this.find('.select-manu').slideToggle();
            isSelectManuVisible = !isSelectManuVisible; // Toggle visibility state
            toggleArrow();
        });
    
        function toggleArrow() {
            var $downArrow = $this.find('.downarrowbtn');
            if (isSelectManuVisible) {
                $downArrow.css({ "transform": "rotateZ(180deg) translateY(45%)" });
            } else {
                $downArrow.css({ "transform": "" }); // Reset to default transform
            }
        }
    });
    
    //select box design area end


    //search box area start
    $('.booking-information-search-area input[type="search"]').on('keyup', function () {
        var searchText = $(this).val().toLowerCase();
        var $searchItemField = $('.booking-information-search-area .search-item-feild');
    
        // Show search item field if it's hidden
        $searchItemField.show();
    
        // Filter list items based on search input
        $searchItemField.find('li').each(function () {
            var listItemText = $(this).text().toLowerCase();
            if (listItemText.includes(searchText)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    
    // Click event handler for suggested items
    $('.booking-information-search-area .search-item-feild').on('click', 'li', function () {
        var clickedText = $(this).text();
        $('.booking-information-search-area input[type="search"]').val(clickedText);
    });
    
    //search box area end

    $('.room1').on('click', function () {
        $("#reservationPersonDetailsOpen").toggle();
    });
    $('#reservationPersonDetailsClose').on('click', function () {
        $("#reservationPersonDetailsOpen").hide();
    });
    $('#profile').on('click', function () {
        $("#profileOption").slideToggle();
    });

    $("#bookingPage").click(function () {
        window.location.href = "booking-person-details.html";
    });
    $("#checkinNew").click(function () {
        window.location.href = "checkin-booking-person-details.html";
    });
    $("#godeshboard").click(function () {
        window.location.href = "front-desk-dashboard.html";
    });
    $(".loginbtn").click(function () {
        window.location.href = "front-desk-dashboard.html";
    });

    $(".register").click(function () {
        window.location.href = "register.html";
    });
    $(".login").click(function () {
        window.location.href = "login.html";
    });
    $(".forget").click(function () {
        window.location.href = "forgetpassword.html";
    });

    $(".headersearchBtn").click(function () {
        $(".popupinput").show();
    });
    $("#newReservation").click(function () {
        $(".overlay").fadeIn();
        $(".viabookingpopup-area").fadeIn();
    });
    $(".bookconfirm").click(function () {
        $(".overlay").fadeIn();
        $(".viabookingpopup-area").fadeIn();
    });

    $(".checkinNow").click(function () {
        $(".overlay").fadeIn();
        $(".checkin-nowpopup-area").fadeIn();
    });

    $(".closeBtn").click(function () {
        $(".overlay").fadeOut();
        $(".viabookingpopup-area").fadeOut();
    });
    $(".addCleaningtask").click(function () {
        $(".overlay").fadeIn();
        $(".edit-cleaning-popup").fadeIn();
    });

    $(".closebtn").click(function () {
        $(".overlay").fadeOut();
        $(".edit-cleaning-popup").fadeOut();
    });


    $(".booking-historybtn").click(function (event) {
        event.preventDefault(); // Prevent default behavior of the button click
        $("#bookinghistory").fadeIn();
        $(".overlay").fadeIn();
    });
    $(".closeBtn").click(function () {
        $(".overlay").fadeOut();
        $("#bookinghistory").fadeOut();
    });
    $(".guestListbtn").click(function (event) {
        event.preventDefault(); // Prevent default behavior of the button click
        $("#guestList").fadeIn();
        $(".overlay").fadeIn();
    });
    $(".closeBtn").click(function () {
        $(".overlay").fadeOut();
        $("#guestList").fadeOut();
    });


    $('.viabooking-item').click(function () {
        // Remove the class from all elements
        $('.viabooking-item').removeClass('viaselect');

        // Toggle the class for the clicked item
        $(this).addClass('viaselect');

        // Hide the checkmark from all elements
        $('.viabooking-item .checkmark').hide();

        // Show the checkmark for the clicked item
        $(this).find(".checkmark").show();
    });
    $('.payment-mathods-item').click(function () {
        // Remove the class from all elements
        $('.payment-mathods-item').removeClass('active-payment-method');

        // Toggle the class for the clicked item
        $(this).addClass('active-payment-method');


    });
    $('.pet-item').click(function () {
        // Toggle the class for the clicked item
        $(this).toggleClass('active-p-v');
    });



    //for main page
    $("#applyButton").click(function () {
        var fromDate = formatDate($("#fromDate").val());
        var toDate = formatDate($("#toDate").val());
        $("#mainDateInput").val(fromDate + " - " + toDate);
        toggleDatePicker(); // Close the date picker after applying the date range
    });

    //for popup page
    $("#applyButtonpopup").click(function () {
        var fromDate = formatDatepopup($("#fromDatepopup").val());
        var toDate = formatDatepopup($("#toDatepopup").val());
        $("#mainDateInputpopup").val(fromDate + " - " + toDate);
        toggleDatePickerpopup(); // Close the date picker after applying the date range
    });


    //additional info area


    $(".vehicalinfoBtn").click(function (event) {
        event.preventDefault(); // Prevent default behavior of the button click
        $("#vehicalInfo").show();
        $("#petInfo").hide();
    });

    $(".petinfoBtn").click(function (event) {
        event.preventDefault(); // Prevent default behavior of the button click
        $("#vehicalInfo").hide();
        $("#petInfo").show();
    });


    //on off function

    $('.onoffbtn').click(function () {
        $(this).toggleClass('on');
        $('.onoff-status').text($(this).hasClass('on') ? 'on' : 'off');
        if ($(this).hasClass('on')) {
            $(this).next('.onoff-status').show();
            $(".onof-circle").css({ 'right': '2px', 'left': 'auto', 'background-color': 'yellow' });
        } else {
            $(this).next('.onoff-status').hide();
            $(".onof-circle").css({ 'left': '2px', 'right': 'auto', 'background-color': 'white' });
        }
    });




});
document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll("#slideshow p");
    var index = 0;

    function showSlide() {
        slides.forEach(function (slide) {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
        index = (index + 1) % slides.length;
        setTimeout(showSlide, 10000);
    }

    showSlide();
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


window.addEventListener('scroll', function () {
    var footer = document.getElementById('footer');
    if (window.scrollY > 0) {
        footer.classList.add('footer-hidden');
    } else {
        footer.classList.remove('footer-hidden');
    }
});



