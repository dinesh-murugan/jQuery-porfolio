$(document).ready(function() {
    var progressBar = $(".progress-bar");
    var skillsHeading = $(".color");
    var windowHeight = $(window).height();
    var scrollOffset = windowHeight / 2;

    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition >= skillsHeading.offset().top - scrollOffset) {
            var percentage = (scrollPosition - (skillsHeading.offset().top - scrollOffset)) / (skillsHeading.height() + windowHeight - scrollOffset) * 80;

            if (percentage <= 80) {
                progressBar.css("width", percentage + "%");
                progressBar.attr("aria-valuenow", percentage);
            }
        }
    });
});
