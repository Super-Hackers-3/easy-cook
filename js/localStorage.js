'use strict';


let RecomendationImage,
  breakfastRecipeTitle,
  breakfastrecipeTitle,
  breakfastrecipeImage,
  lunchrecipeTitle,
  lunchrecipeImage,
  dinnerRecipeTitle,
  dinnerRecipeImage,
  elementsById;


let arrayOfShowingImages = ['rec1', 'rec2','rec3']; //IDs for the images in the HOME page
let arrayOfShowingTitles = ['title1', 'title2','title3']; //IDs for the titles in the HOME page
let arraOfIds = ['link1', 'link2','link3']; //IDs for the anchor element in the HOME page
let arrayOfDefaultImages = ['img/Chicken.jpg', 'img/Ribs.jpg', 'img/salad.jpg'];


if (localStorage.BFTitles && localStorage.LTitles && localStorage.DTitles) {
  breakfastrecipeTitle = localStorage.getItem('BFTitles').split(',');
  breakfastrecipeImage = localStorage.getItem('BFImages').split(',');

  lunchrecipeTitle = localStorage.getItem('LTitles').split(',');
  lunchrecipeImage = localStorage.getItem('LImages').split(',');

  dinnerRecipeTitle = localStorage.getItem('DTitles').split(',');
  dinnerRecipeImage =localStorage.getItem('DImages').split(',');
} else {
  // calling the default function
  defaultImages();
}



// Function to show the Recomendations by default before getting the right ones from the local storage
function defaultImages() {
  for (let i=0; i<arrayOfShowingImages.length; i++){
    RecomendationImage = document.getElementById(arrayOfShowingImages[i]);
    RecomendationImage.setAttribute('src', arrayOfDefaultImages[i]);
  }

  for (let i=0; i<arrayOfShowingTitles.length; i++){
    breakfastRecipeTitle = document.getElementById(arrayOfShowingTitles[i]);
    breakfastRecipeTitle.textContent = arrayOfDefaultImages[i].split('.')[0].slice(4);
  }
}




// Function to get the breakfast elements from the local storage and display them in the HOME page
function breakfast() {
  for (let i=0; i<arrayOfShowingImages.length; i++){
    RecomendationImage = document.getElementById(arrayOfShowingImages[i]);
    RecomendationImage.setAttribute('src', breakfastrecipeImage[i].slice(23).slice(0,-1));
    if(i === arrayOfShowingImages.length-1){
      RecomendationImage.setAttribute('src', breakfastrecipeImage[i].slice(23).slice(0,-1));
    }
  }

  for (let i=0; i<arrayOfShowingTitles.length; i++){
    breakfastRecipeTitle = document.getElementById(arrayOfShowingTitles[i]);
    breakfastRecipeTitle.textContent = breakfastrecipeTitle[i].slice(1).slice(0,-1);
    elementsById = document.getElementById(arraOfIds[i]);
    elementsById.setAttribute('href','pages/breakfast.html#' + breakfastrecipeTitle[i].slice(1).slice(0,-1).replace(/ /g, ''));

    if (i === 0){
      breakfastRecipeTitle.textContent = breakfastrecipeTitle[i].slice(2).slice(0,-1);
      elementsById.setAttribute('href','pages/breakfast.html#' + breakfastrecipeTitle[i].slice(2).slice(0,-1).replace(/ /g, ''));
    }

    if(i === arrayOfShowingTitles.length-1){
      breakfastRecipeTitle.textContent = breakfastrecipeTitle[i].slice(1).slice(0,-2);
      elementsById.setAttribute('href','pages/breakfast.html#' + breakfastrecipeTitle[i].slice(1).slice(0,-2).replace(/ /g, ''));
    }

  }
}



// Function to get the lunch elements from the local storage and display them in the HOME page
function lunch() {
  for (let i=0; i<arrayOfShowingImages.length; i++){
    RecomendationImage = document.getElementById(arrayOfShowingImages[i]);
    RecomendationImage.setAttribute('src', lunchrecipeImage[i].slice(23).slice(0,-1));
    if(i === arrayOfShowingImages.length-1){
      RecomendationImage.setAttribute('src', lunchrecipeImage[i].slice(23).slice(0,-2));
    }
  }

  for (let i=0; i<arrayOfShowingTitles.length; i++){
    breakfastRecipeTitle = document.getElementById(arrayOfShowingTitles[i]);
    breakfastRecipeTitle.textContent = lunchrecipeTitle[i].slice(1).slice(0,-1);
    elementsById = document.getElementById(arraOfIds[i]);
    elementsById.setAttribute('href','pages/lunch.html#' + lunchrecipeTitle[i].slice(1).slice(0,-1).replace(/ /g, ''));

    if (i === 0){
      breakfastRecipeTitle.textContent = lunchrecipeTitle[i].slice(2).slice(0,-1);
      elementsById.setAttribute('href','pages/lunch.html#' + lunchrecipeTitle[i].slice(2).slice(0,-1).replace(/ /g, ''));
    }

    if(i === arrayOfShowingTitles.length-1){
      breakfastRecipeTitle.textContent = lunchrecipeTitle[i].slice(1).slice(0,-2);
      elementsById.setAttribute('href','pages/lunch.html#' + lunchrecipeTitle[i].slice(1).slice(0,-2).replace(/ /g, ''));
    }

  }
}


// Function to get the dinner elements from the local storage and display them in the HOME page
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
    elementsById = document.getElementById(arraOfIds[i]);
    elementsById.setAttribute('href','pages/dinner.html#' + dinnerRecipeTitle[i].slice(1).slice(0,-1).replace(/ /g, ''));

    if (i === 0){
      breakfastRecipeTitle.textContent = dinnerRecipeTitle[i].slice(2).slice(0,-1);
      elementsById.setAttribute('href','pages/dinner.html#' + dinnerRecipeTitle[i].slice(2).slice(0,-1).replace(/ /g, ''));
    }

    if(i === arrayOfShowingTitles.length-1){
      breakfastRecipeTitle.textContent = dinnerRecipeTitle[i].slice(1).slice(0,-2);
      elementsById.setAttribute('href','pages/dinner.html#' + dinnerRecipeTitle[i].slice(1).slice(0,-2).replace(/ /g, ''));
    }

  }
}









let hours,
  minutes,
  seconds,
  time,
  hours1,
  timePeriods;

let recomendationSection = document.getElementById('rec');
let timeBox = document.createElement('h3');
recomendationSection.appendChild(timeBox);
let marqueeElement = document.getElementById('marquee');

//Increases the time each second
setInterval(showTime, 1000);



/* Function do the following :

1- Gets the time (Hours,Minutes, and Seconds)
2- Sets the periond of times
3- Uses three conditions based on the periods of time among the day to show either the breakfast, lunch, or dinner
4- Shows the current time on the HOME page */


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
  hours1 = hours % 12 || 12;
  if (hours1<10){
    hours1 = '0' + hours1;
  }
  timeBox.textContent = `${hours1}:${minutes}:${seconds} ${timePeriods}`;
}

showTime();

if (localStorage.BFTitles && localStorage.LTitles && localStorage.DTitles) {
  if (hours<12 && hours>=6){
    breakfast();
    marqueeElement.textContent = 'Good Morning! To get a delicious breakfast, we recommend these dishes to you!';
  }
  if (hours>=12 && hours<18){
    lunch();
    marqueeElement.textContent = 'Lunch time!, we recommend these dishes to you';
  }

  if (hours>=18 || hours<6){
    dinner();
    marqueeElement.textContent = 'Have a great meal Before going to bed ... Here are some...';
  }
}
