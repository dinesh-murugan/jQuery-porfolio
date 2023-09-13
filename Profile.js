$(document).ready(function() {
    $(".Home").waypoint(function() {
        setTimeout(function() {
            $(".Home").addClass("animate__animated animate__fadeInUp");
        }, 500); 
    }, { offset: "80%" });
    $(".b").click(function() {
        $(".heading").addClass("animate__animated animate__fadeInUp");
        setTimeout(function() {
            $(".heading").removeClass("animate__animated animate__fadeInUp");
        }, 1000);
    });
    
    $(".c").click(function() {
        animateElementWithDelay(1, 1000);
    });
    
    function animateElementWithDelay(index, delay) {
        if (index <= 4) { 
            var elementClass = ".c" + index;
            $(elementClass).addClass("animate__animated animate__zoomIn");
    
            setTimeout(function() {
                $(elementClass).removeClass("animate__animated animate__zoomIn");
                animateElementWithDelay(index + 1, delay); 
            }, delay);
        }
        
    }
    

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

//  for frame work

$("a.e").click(function() {
    $(".framework").addClass("animate__animated animate__rollIn");
    setTimeout(function() {
        $(".framework").removeClass("animate__animated animate__rollIn");
    }, delay);
});

var text = "Full stack developer ";
var typingSpeed = 100; 
var index = 0;

function typeCharacter() {
  if (index < text.length) {
    var currentChar = text.charAt(index);
    $('#auto-typing-text').append(currentChar);
    index++;
  } else {
    clearInterval(typingInterval);
    setTimeout(function() {
      $('#auto-typing-text').empty(); 
      index = 0;
      typingInterval = setInterval(typeCharacter, typingSpeed);
    }, 5000); 
  }
}

var typingInterval = setInterval(typeCharacter, typingSpeed);
});