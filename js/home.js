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