//menu
function myFunction() {
    var x = document.getElementById("ngw-menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//menu
//owlCarousel
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsive:{
        1000: {
            items: 1
        }
    }
    });
  });
//owlCarousel

AOS.init({
  once: false
});

document.getElementById("autoplay").play();

//Таймер

// Set the date we're counting down to
var countDownDate = new Date("Jan 12, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("works-time").innerHTML = days + "д " + hours + "ч "
  + minutes + "м " + seconds + "с ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("works-time").innerHTML = "EXPIRED";
  }
}, 1000);