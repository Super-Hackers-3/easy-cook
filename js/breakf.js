// 'use strict';
// let section = document.getElementsByClassName('FirstBreakFast');
// let button = document.getElementsByClassName('breakFastBtn');



// function BreakFast(elment1, elment2, elment3, elment4, videoId, srcVideo) {
//   this.arr = new Array(elment1, elment2, elment3, elment4);
//   this.videoId = videoId;
//   this.srcVideo = srcVideo;
//   BreakFast.allElement.push(this);
// }

// BreakFast.allElement = [];


// new BreakFast("This comes with 77 calories", "Eggs Are High in Quality Protein", "Eggs Raise Levels of “Good” Cholesterol", "40% of your daily vitamin D requirements", "quPK4Kf5HrY", "https://www.youtube.com/embed/quPK4Kf5HrY");
// new BreakFast("tzatziki contains 54 calories", "only 8 grams of carbohydrates", " Hummus is 100% soy bean", "Tzatziki is made with Greek yogurt", "Hyz0C7i3ysU", "https://www.youtube.com/embed/Hyz0C7i3ysU");
// new BreakFast("It contains 60 calories", "Treating Chronic Diseases", "It is a culinary herb or family of herbs", "It contain high amount of Iron", "WEDndTCyGgU", "https://www.youtube.com/embed/WEDndTCyGgU");

// // console.log(BreakFast.allElement);




// for (let i = 0; i < section.length; i++) {
//     button[i].addEventListener('click', handleClick);
//     console.log(i);

//     function handleClick(event) {
//         let elment = BreakFast.allElement[i];
//         section = document.getElementsByClassName('FirstBreakFast')[i];
//         console.log(elment);
//         console.log(section);
//         let ul = document.createElement('ul');
//         section.appendChild(ul);
//         ul.textContent = 'contents';

//         for (let x = 0; x < elment.arr2.length; x++) {
//             let li = document.createElement('li')
//             ul.appendChild(li);
//             li.textContent = elment.arr2[x];


//         }


//         let iframe = document.createElement('iframe');
//         section.appendChild(iframe);
//         iframe.setAttribute('id', elment.videoId);
//         document.getElementById(elment.videoId).src = elment.srcVideo;
//         console.log(iframe);

//         button[i].removeEventListener('click', handleClick);
//         console.log(i);
//         console.log(button[i]);

//     }


//     let iframe = document.createElement('iframe');
//     section.appendChild(iframe);
//     iframe.setAttribute('id', elment.videoId);
//     document.getElementById(elment.videoId).src = elment.srcVideo;

//     button[i].removeEventListener('click', handleClick);
//     console.log(i);
//     console.log(button[i]);
//   }
// }

// var rating = document.querySelector(".rating");
// var ratingDisplayEle = document.querySelector(".rating-display");

// //add event listener
// function clickStar(ele) {
//     var clickedStar = ele;
//     //value of the star
//     var ratingValue = parseInt(clickedStar.getAttribute("value"));
//     //change the color of the star
//     for (var i = 0; i < ratingValue; i++) {
//         rating.children[i].classList.add("clicked");
//         for (var j = ratingValue; j <= 4; j++) {
//             if (rating.children[j].classList.contains("clicked")) {
//                 rating.children[j].classList.remove("clicked");
//             }
//         }
//     }
// }


// //function to calculate rating
// function calculateRating(ele) {
//     //check how many elements are having clicked class
//     var ratingCount = 0;
//     for (var i = 0; i < ele.children.length; i++) {
//         if (ele.children[i].classList.contains("clicked")) {
//             ratingCount++;
//         }
//     }
//     ratingDisplayEle.textContent = `You have selected ${ratingCount} rating out of 5`;
// }

let breakfastImages = document.getElementsByClassName('imgeSection');
let breakfastTitles = document.getElementsByClassName('recipeTitle');
let arrayOfRecipesTitles = [];
let arrayOfRecipesImages = [];

for(let i=0; i<breakfastTitles.length; i++){
  arrayOfRecipesTitles.push(breakfastTitles.item(i).innerHTML);
}
for(let i=0; i<breakfastImages.length; i++){
  arrayOfRecipesImages.push(breakfastImages.item(i).currentSrc);
}

localStorage.setItem('Titles', JSON.stringify(arrayOfRecipesTitles));
localStorage.setItem('Images', JSON.stringify(arrayOfRecipesImages));

console.log(JSON.stringify(arrayOfRecipesImages));
console.log(breakfastImages);

