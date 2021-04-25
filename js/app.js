//recomendation-section



//SlideShow

let slides = document.getElementsByClassName('slideShowImages');
// let slides=[];

// for (let j=0; j<slidesCollection.length; j++){
//   slides[j] = slidesCollection[j];
// }

let slideIndex=1;
showSlides();

function showSlides(){
  for(let i=0; i<slides.length; i++){
    slides[i].style.display='none';
  }
  slides[slideIndex].style.display='block';
  timer();
}

function timer(){
  setInterval(changeSlide, 2000);
}

function changeSlide(){
  //slides[slideIndex-1].style.display='none';
  console.log(slideIndex);
  if(slideIndex <slides.length){
    slides[slideIndex].style.display='block';
    slides[slideIndex].style.transition='width 4s ease-in-out';
    slides[slideIndex-1].style.display='none';
    slideIndex=slideIndex+1;
  }
  else if(slideIndex===slides.length){
    slides[0].style.display='block';
    slides[slides.length-1].style.display='none';
    slideIndex=1;
  }

}
