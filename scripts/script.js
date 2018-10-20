$(document).ready(function(){ 
  /*  */
  $('.sidenav').sidenav();
  $('.carousel').carousel();

  /* Add smooth scrolling to all links */
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 350, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  /* About me Carousel */

  // get all dots
  var $dots = Array.prototype.slice.call(document.querySelectorAll('.dot'), 0);
  // Show initial image
  var slideIndex = 1;
  showSlides(slideIndex);
  // Check if there are any dots
  if ($dots.length > 0) {

    // Add a click event on each of the dots
    $dots.forEach(function ($el) {
      $el.addEventListener('click', function () {
        resetTimer();
        // Get the slide number from id
        var target = $el.id;

        // Go to that slide
        currentSlide(parseInt(target));
      });
    });
  }

  var $next = document.getElementById("forward");
  $next.addEventListener('click', function() {
    resetTimer();
    plusSlides(1);
  });

  var $prev = document.getElementById("backward");
  $prev.addEventListener('click', function() {
    resetTimer();
    plusSlides(-1);
  });

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
      plusSlides(1);
    }, 10000);
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  // Move forward a slide every 5 seconds
  var timer = setInterval(function() {
    plusSlides(1);
  }, 10000);
});


/* Loading function */
$(window).load(function() {
  // All images are loaded now.
  $('div#loader').fadeOut(1000, "linear");
  $("div#main-container").addClass("load");
});
