var carouselWidth = $(".education .carousel-inner")[0].scrollWidth;
var cardWidth = $(".education .carousel-item").width();
var scrollPosition = 0;


$('.carousel-control-next[data-type="education"]').on('click', function (){
  console.log('next');
  scrollPosition = scrollPosition + cardWidth;
  $('.education .carousel-inner').animate(
      { scrollLeft: scrollPosition },
      600);
});
$('.carousel-control-prev[data-type="education"]').on('click', function () {
    console.log('prev');
    scrollPosition = scrollPosition - cardWidth;
    $('.education .carousel-inner').animate(
        { scrollLeft: scrollPosition },
        600);
});

var carouselWidth2 = $(".workexperience .carousel-inner")[0].scrollWidth;
var cardWidth2 = $(".workexperience .carousel-item").width();
var scrollPosition2 = 0;

$('.carousel-control-next[data-type="work"]').on('click', function (){
  console.log('next');
  scrollPosition2 = scrollPosition2 + cardWidth2;
  $('.workexperience .carousel-inner').animate(
      { scrollLeft: scrollPosition2 },
      600);
});

$('.carousel-control-prev[data-type="work"]').on('click', function () {
  console.log('prev');
  scrollPosition2 = scrollPosition2 - cardWidth2;
  $('.workexperience .carousel-inner').animate(
      { scrollLeft: scrollPosition2 },
      600);
});


var carouselWidth3 = $(".hobby .carousel-inner")[0].scrollWidth;
var cardWidth3 = $(".hobby .carousel-item").width();
var scrollPosition3 = 0;

$('.carousel-control-next[data-type="hobby"]').on('click', function (){
  console.log('next');
  scrollPosition3 = scrollPosition3 + cardWidth3;
  $('.hobby .carousel-inner').animate(
      { scrollLeft: scrollPosition3 },
      600);
});

$('.carousel-control-prev[data-type="hobby"]').on('click', function () {
  console.log('prev');
  scrollPosition3 = scrollPosition3 - cardWidth3;
  $('.hobby .carousel-inner').animate(
      { scrollLeft: scrollPosition3 },
      600);
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          } else {
              entry.target.classList.remove("show");
          }
      });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});
