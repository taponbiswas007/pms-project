$(document).ready(function () {
    // Function to load tabs from local storage
    function loadTabs() {
        let tabs = JSON.parse(localStorage.getItem('bookingTabs')) || [];
        tabs.forEach((tabName, index) => {
            createTab(tabName, index + 1);
        });
    }

    // Function to save tabs to local storage
    function saveTab(tabName) {
        let tabs = JSON.parse(localStorage.getItem('bookingTabs')) || [];
        tabs.push(tabName);
        localStorage.setItem('bookingTabs', JSON.stringify(tabs));
    }

    // Function to remove a tab from local storage
    function removeTab(tabName) {
        let tabs = JSON.parse(localStorage.getItem('bookingTabs')) || [];
        tabs = tabs.filter(tab => tab !== tabName);
        localStorage.setItem('bookingTabs', JSON.stringify(tabs));
    }

    // Function to create a new tab
    function createTab(tabName, tabCount) {
        // Create new tab with a close button
        let newTab = `<li class="active">
                        ${tabName}
                        <button class="tabclosebtn">
                            <i class="fa-solid fa-x tabclosemark"></i>
                        </button>
                      </li>`;

        // Append the new tab
        $('.booking-form-tab-area ul').append(newTab);

        // Remove .active class from all other tabs
        $('.booking-form-tab-area ul li').removeClass('active');

        // Add .active class to the new tab
        $('.booking-form-tab-area ul li:last-child').addClass('active');
    }

    // Function to add a new tab
    $('.add-new-form').click(function () {
        let tabCount = $('.booking-form-tab-area ul li').length + 1;
        let tabName = `Booking ${tabCount}`;

        // Ensure the tab name is unique
        while ($('.booking-form-tab-area ul li').filter(function () {
            return $(this).text().trim() === tabName;
        }).length > 0) {
            tabCount++;
            tabName = `Booking ${tabCount}`;
        }

        createTab(tabName, tabCount);
        saveTab(tabName);
    });

    // Function to switch active tab
    $(document).on('click', '.booking-form-tab-area ul li', function () {
        $('.booking-form-tab-area ul li').removeClass('active');
        $(this).addClass('active');
    });

    // Function to close a tab
    $(document).on('click', '.tabclosebtn', function (e) {
        e.stopPropagation();

        let tabName = $(this).parent().text().trim();

        $(this).parent().remove();

        removeTab(tabName);

        if ($('.booking-form-tab-area ul li').length > 0) {
            $('.booking-form-tab-area ul li').removeClass('active');
            $('.booking-form-tab-area ul li:first').addClass('active');
        }
    });

    // Load any saved tabs from local storage on page load
    loadTabs();
});
