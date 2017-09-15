$(document).ready(function(){ 
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
  
  //if we click on something outside of navbar when its open, the navbar closes.
  $(document).click(function (event) {
        var navbarBurger = $navbarBurgers[0];
        //console.log($navbarBurgers);
        //console.log(navbarBurger);
        // Get element we clicked on
        var clickover = $(event.target);
        // Check if burger is open
        var _opened = $(navbarBurger).hasClass("is-active");
        //console.log('opened: ' + _opened);
        //console.log('is-active: ' + clickover.hasClass("is-active"));
        // if burger open AND element isn't our menu
        if (_opened === true && !clickover.hasClass("is-active")) {
            var target = $navbarBurgers[0].dataset.target;
            var $target = document.getElementById(target);
            $navbarBurgers[0].classList.toggle('is-active');
            $target.classList.toggle('is-active');
        }
    });

  /* Add smooth scrolling to all links */
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 750, function(){
   
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

        // Get the slide number from id
        var target = $el.id;

        // Go to that slide
        currentSlide(parseInt(target));
      });
    });
  }

  var $next = document.getElementById("forward");
  $next.addEventListener('click', function() {
    plusSlides(1);
  });

  var $prev = document.getElementById("backward");
  $prev.addEventListener('click', function() {
    plusSlides(-1);
  });

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
});
/* Loading function */
$(window).load(function() {
  // All images are loaded now.
  $('div#loader').fadeOut(1000, "linear");
  $("div#main-container").addClass("load");
});