'use strict';



let recipeTitle = localStorage.getItem('Titles').split(',');
let recipeImage = localStorage.getItem('Images').split(',');

let arrayOfShowingImages = ['rec1', 'rec2','rec3'];
let arrayOfShowingTitles = ['title1', 'title2','title3'];
let RecomendationImage;
let breakfastRecipeTitle;
function breakfast() {
  for (let i=0; i<arrayOfShowingImages.length; i++){
    RecomendationImage = document.getElementById(arrayOfShowingImages[i]);
    RecomendationImage.setAttribute('src', recipeImage[i].slice(23).slice(0,-1));
    if(i === arrayOfShowingImages.length-1){
      RecomendationImage.setAttribute('src', recipeImage[i].slice(23).slice(0,-2));
    }
  }
  for (let i=0; i<arrayOfShowingTitles.length; i++){
    breakfastRecipeTitle = document.getElementById(arrayOfShowingTitles[i]);
    breakfastRecipeTitle.textContent = recipeTitle[i].slice(1).slice(0,-1);
    if (i === 0){
      breakfastRecipeTitle.textContent = recipeTitle[i].slice(2).slice(0,-1);
    }
    if(i === arrayOfShowingTitles.length-1){
      breakfastRecipeTitle.textContent = recipeTitle[i].slice(1).slice(0,-2);
    }
  }
}
console.log(recipeTitle);
// console.log(recipeImage[2].slice(23).slice(0,-1));






let hours,
  minutes,
  seconds,
  time,
  timePeriods;

let recomendationSection = document.getElementById('rec');
let timeBox = document.createElement('h3');
recomendationSection.appendChild(timeBox);
let marqueeElement = document.getElementById('marquee');
setInterval(showTime, 1000);
function showTime() {
  time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  if (hours >= 12){
    timePeriods = 'PM';
  } else {
    timePeriods = 'AM';
  }
  if (minutes<10){
    minutes = '0' + minutes;
  }
  if (seconds<10){
    seconds = '0' + seconds;
  }
  hours = hours % 12;
  if (hours<10){
    hours = '0' + hours;
  }
  timeBox.textContent = `${hours}:${minutes}:${seconds} ${timePeriods}`;
  if (hours<12){
    breakfast();
    marqueeElement.textContent = 'Good Morning! To get a delicious breakfast, we recommend these dishes to you!';
  }
}

showTime();

console.log(`${hours}:${minutes}:${seconds} ${timePeriods}`);
