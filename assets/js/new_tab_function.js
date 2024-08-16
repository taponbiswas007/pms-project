$(document).ready(function() {
    // Function to add a new tab
    $('.add-new-form').click(function() {
        // Count the current number of tabs to generate unique ids
        let tabCount = $('.booking-form-tab-area ul li').length + 1;

        // Create new tab with a close button
        let newTab = `<li class="active">
                        Booking ${tabCount}
                        <button class="tabclosebtn">
                            <i class="fa-solid fa-x tabclosemark"></i>
                        </button>
                      </li>`;
        
        // Append the new tab
        $('.booking-form-tab-area ul').append(newTab);

        // Add corresponding content in .booking-form
        $('main.booking-form').append(`<div class="tab-content" id="tab-${tabCount}">
                                            Content for Booking ${tabCount}
                                        </div>`);

        // Remove .active class from all other tabs and hide all content
        $('.booking-form-tab-area ul li').removeClass('active');
        $('.tab-content').hide();

        // Add .active class to the new tab and show its content
        $('.booking-form-tab-area ul li:last-child').addClass('active');
        $(`#tab-${tabCount}`).show();
    });

    // Function to switch active tab and show its content
    $(document).on('click', '.booking-form-tab-area ul li', function() {
        // Remove .active class from all tabs
        $('.booking-form-tab-area ul li').removeClass('active');
        
        // Add .active class to the clicked tab
        $(this).addClass('active');

        // Hide all content and show the clicked tab's content
        let tabIndex = $(this).index();
        $('.tab-content').hide();
        $('.tab-content').eq(tabIndex).show();
    });

    // Function to close a tab
    $(document).on('click', '.tabclosebtn', function(e) {
        e.stopPropagation(); // Prevent the click from triggering the tab switch
        
        // Find the index of the tab being closed
        let tabIndex = $(this).parent().index();
        
        // Remove the tab and its corresponding content
        $(this).parent().remove();
        $('.booking-form .tab-content').eq(tabIndex).remove();

        // Show the first tab's content and set it to active if any tab is left
        if ($('.booking-form-tab-area ul li').length > 0) {
            $('.booking-form-tab-area ul li').removeClass('active');
            $('.booking-form-tab-area ul li:first').addClass('active');
            $('.booking-form .tab-content').hide();
            $('.booking-form .tab-content').eq(0).show();
        }
    });

    // Show the content of the first tab by default and set it to active
    $('.booking-form .tab-content').eq(0).show();
    $('.booking-form-tab-area ul li:first').addClass('active');
});
