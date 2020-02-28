$('.menu-item').click(function() {
    if ($(this).children('.dropdown-menu').is(".highlight")) {
        $(this).children('.dropdown-menu').toggleClass("highlight");
    } else {
        $('.dropdown-menu').removeClass('highlight');
        $(this).children('.dropdown-menu').toggleClass("highlight");
    }


});
