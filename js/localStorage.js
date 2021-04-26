'use strict';



let recipeTitle = localStorage.getItem('Titles').split(',');
let recipeImage = localStorage.getItem('Images').split(',');

let arrayOfShown = ['rec1', 'rec2','rec3'];
let RecomendationImage = 0;

for (let i=0; i<arrayOfShown.length; i++){
  RecomendationImage = document.getElementById(arrayOfShown[i]);
  RecomendationImage.setAttribute('src', recipeImage[i].slice(23).slice(0,-1));
  if(i === arrayOfShown.length-1){
    RecomendationImage.setAttribute('src', recipeImage[i].slice(23).slice(0,-2));
  }
}
console.log(arrayOfShown.length);
// console.log(recipeImage[2].slice(23).slice(0,-1));
console.log(recipeImage[2].slice(23).slice(0,-1));



// let x = document.getElementById('rec1');
// x.setAttribute('src', 'img/malik-skydsgaard-ylGcmefqE_I-unsplash.jpg')
