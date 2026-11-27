
$(document).ready(function () {

    // Smooth scrolling for page links
    $("a[href^='#']").on("click", function (event) {
        let target = $(this).attr("href");

        if ($(target).length) {
            event.preventDefault();

            $("html, body").animate({
                scrollTop: $(target).offset().top
            }, 600);
        }
    });

    // Welcome animation
    $(".hero-content").hide().fadeIn(1000);

});
