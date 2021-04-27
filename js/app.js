// //recomendation-section
// //SlideShow


// let slides = document.getElementsByClassName('slideShowImages');
// console.log(slides);
// let slideIndex=1;
// showSlides();

// function showSlides(){
//   for(let i=0; i<slides.length; i++){
//     slides[i].style.display='none';
//   }
//   slides[slideIndex].style.display='block';
//   timer();
// }

// function timer(){
//   setInterval(fadeOut, 4000);
// }


// function fadeOut(){
//   //slides[slideIndex-1].style.display='none';
//   console.log(slideIndex);
//   if(slideIndex <slides.length){
//     slides[slideIndex].style.display='block';
//     slides[slideIndex-1].style.display='block';
//     slides[slideIndex].setAttribute('id', 'animationSlide');
//     //slides[slideIndex-1].setAttribute('id', 'animationSlides');
//     slideIndex=slideIndex+1;
//   }
//   if(slideIndex===slides.length){
//     slides[0].style.display='block';
//     //slides[slideIndex-1].style.display='block';
//     // slides[slides.length-1].style.display='none';
//     slides[0].setAttribute('id', 'animationSlide');
//     //slides[slideIndex-1].setAttribute('id', 'animationSlides');
//     slideIndex=1;
//   }

// }


// new

let slideIndex = 0;
// setInterval(showSlides, 4000);


// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  // if (n > slides.length) {
  //   slideIndex = 1;
  // }
  // if (n < 1) {
  //   slideIndex = slides.length;
  // }
  // console.log(slides);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if(slideIndex> slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  setTimeout(showSlides, 4000);
}


showSlides(slideIndex);
