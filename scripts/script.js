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
        console.log($navbarBurgers);
        console.log(navbarBurger);
        // Get element we clicked on
        var clickover = $(event.target);
        // Check if burger is open
        var _opened = $(navbarBurger).hasClass("is-active");
        console.log('opened: ' + _opened);
        console.log('is-active: ' + clickover.hasClass("is-active"));
        // if burger open AND element isn't our menu
        if (_opened === true && !clickover.hasClass("is-active")) {
            var target = $navbarBurgers[0].dataset.target;
            var $target = document.getElementById(target);
            $navbarBurgers[0].classList.toggle('is-active');
            $target.classList.toggle('is-active');
        }
    });

  // Add smooth scrolling to all links
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
    } // End if
  });

});