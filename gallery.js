var slideIndex = 1;
showslides(slideIndex);

//next/prev

function plusSlides(n) {
  showSlides(slideIndex += n);

}

//thumbnail

function currentSlide(n) {
  showSlides(SlideIndex=n)
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slideindex=1}
  if (n<1) {slideIndex = slide-length}
  for (i=0; i < slides.length; i++) {
  slides[i].style.display ="none";
  }

  for (i=0; i< dots.length; i++) {
    dots[i].className = dots[i].className.replace("active". "");
  }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += "active";
}
