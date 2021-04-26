'use strict';

let arraOfIds = ['link1','link2','link3'];

let breakfastrecipeTitle = localStorage.getItem('BFTitles').split(',');
let breakfastrecipeImage = localStorage.getItem('BFImages').split(',');

let lunchrecipeTitle = localStorage.getItem('LTitles').split(',');
let lunchrecipeImage = localStorage.getItem('LImages').split(',');

let dinnerRecipeTitle = localStorage.getItem('DTitles').split(',');
let dinnerRecipeImage =localStorage.getItem('DImages').split(',');

let arrayOfShowingImages = ['rec1', 'rec2','rec3'];
let arrayOfShowingTitles = ['title1', 'title2','title3'];
let RecomendationImage;
let breakfastRecipeTitle;

// let link1 = document.getElementById('link1');
// let link2 = document.getElementById('link2');
// let link3 = document.getElementById('link3');


function breakfast() {
  for (let i=0; i<arrayOfShowingImages.length; i++){
    RecomendationImage = document.getElementById(arrayOfShowingImages[i]);
    RecomendationImage.setAttribute('src', breakfastrecipeImage[i].slice(23).slice(0,-1));
    if(i === arrayOfShowingImages.length-1){
      RecomendationImage.setAttribute('src', breakfastrecipeImage[i].slice(23).slice(0,-2));
    }
  }
  for (let i=0; i<arrayOfShowingTitles.length; i++){
    breakfastRecipeTitle = document.getElementById(arrayOfShowingTitles[i]);
    breakfastRecipeTitle.textContent = breakfastrecipeTitle[i].slice(1).slice(0,-1);
    if (i === 0){
      breakfastRecipeTitle.textContent = breakfastrecipeTitle[i].slice(2).slice(0,-1);
    }
    if(i === arrayOfShowingTitles.length-1){
      breakfastRecipeTitle.textContent = breakfastrecipeTitle[i].slice(1).slice(0,-2);
    }
  }
}
console.log(breakfastrecipeTitle);
// console.log(recipeImage[2].slice(23).slice(0,-1));
let elementsById;
function lunch() {
  for (let i=0; i<arrayOfShowingImages.length; i++){
    RecomendationImage = document.getElementById(arrayOfShowingImages[i]);

    if(i === arrayOfShowingImages.length-1){
      RecomendationImage.setAttribute('src', lunchrecipeImage[i].slice(23).slice(0,-2));
    }
  }
  for (let i=0; i<arrayOfShowingTitles.length; i++){
    breakfastRecipeTitle = document.getElementById(arrayOfShowingTitles[i]);
    breakfastRecipeTitle.textContent = lunchrecipeTitle[i].slice(1).slice(0,-1);
    if (i === 0){
      breakfastRecipeTitle.textContent = lunchrecipeTitle[i].slice(2).slice(0,-1);
    }
    if(i === arrayOfShowingTitles.length-1){
      breakfastRecipeTitle.textContent = lunchrecipeTitle[i].slice(1).slice(0,-2);
    }
    RecomendationImage.setAttribute('src', lunchrecipeImage[i].slice(23).slice(0,-1));
    elementsById = document.getElementById(arraOfIds[i]);
    elementsById.setAttribute('href','pages/lunch.html#' + breakfastrecipeTitle[i].slice(2).slice(0,-1).replace(/ /g, ''));
  }
  // console.log(breakfastrecipeTitle[0].slice(2).slice(0,-1).replace(/ /g, ''));
}



function dinner() {
  for (let i=0; i<arrayOfShowingImages.length; i++){
    RecomendationImage = document.getElementById(arrayOfShowingImages[i]);
    RecomendationImage.setAttribute('src', dinnerRecipeImage[i].slice(23).slice(0,-1));
    if(i === arrayOfShowingImages.length-1){
      RecomendationImage.setAttribute('src', dinnerRecipeImage[i].slice(23).slice(0,-2));
    }
  }
  for (let i=0; i<arrayOfShowingTitles.length; i++){
    breakfastRecipeTitle = document.getElementById(arrayOfShowingTitles[i]);
    breakfastRecipeTitle.textContent = dinnerRecipeTitle[i].slice(1).slice(0,-1);
    if (i === 0){
      breakfastRecipeTitle.textContent = dinnerRecipeTitle[i].slice(2).slice(0,-1);
    }
    if(i === arrayOfShowingTitles.length-1){
      breakfastRecipeTitle.textContent = dinnerRecipeTitle[i].slice(1).slice(0,-2);
    }
  }
}

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
  if (hours<12 && hours>=6){
    breakfast();
    marqueeElement.textContent = 'Good Morning! To get a delicious breakfast, we recommend these dishes to you!';
  } else if (hours>12 && hours<18){
    console.log('hello');
  }
  if (hours>=12 && hours<18){
    lunch();
    marqueeElement.textContent = 'Lunch time!, we recommend these dishes to you';
  }

  if (hours>=18 || hours<6){
    dinner();
    marqueeElement.textContent = 'Have a great meal Before going to bed ... Here are some...';
  }
  hours = hours % 12 || 12;

  if (hours<10){
    hours = '0' + hours;
  }
  timeBox.textContent = `${hours}:${minutes}:${seconds} ${timePeriods}`; 
}

showTime();

console.log(`${hours}:${minutes}:${seconds} ${timePeriods}`);

