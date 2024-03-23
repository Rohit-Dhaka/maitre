// --------nav-bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulist");
hamburger.addEventListener("click", mobileMenu);
const Navlink = document.querySelectorAll(".nav-link");
Navlink.forEach(e => e.addEventListener("click", () => {
  hamburger.classList.toggle("nav-active");
  document.body.classList.remove("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}))
function mobileMenu() {
  hamburger.classList.toggle("nav-active");
  document.body.classList.toggle("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}


// --------slider
$('.Modules-slider').slick({
  prevArrow: ".pre-btn",
  nextArrow: ".next-btn",
  infinite: true,
  dots: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        autoplay: true,
        cssEase: 'linear'

      }
    },

    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     cssEase: 'linear'
    //   }
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     cssEase: 'linear'
    //   }
    // }
  ]
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year