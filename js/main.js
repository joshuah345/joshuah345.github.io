
// Header stuff
document.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
        /* header.classList.add("sticky"); */ // Change background color on scroll
    } else {
      /*   header.classList.remove("sticky"); */
    }
});

// load particles

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});