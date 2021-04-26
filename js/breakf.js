'use strict';
let section = document.getElementsByClassName('FirstBreakFast');
let button = document.getElementsByClassName('breakFastBtn');



function BreakFast(elment1, elment2, elment3, elment4, videoId, srcVideo) {
  this.arr = new Array(elment1, elment2, elment3, elment4);
  this.videoId = videoId;
  this.srcVideo = srcVideo;
  BreakFast.allElement.push(this);
}

BreakFast.allElement = [];


new BreakFast("This comes with 77 calories", "Eggs Are High in Quality Protein", "Eggs Raise Levels of “Good” Cholesterol", "40% of your daily vitamin D requirements", "quPK4Kf5HrY", "https://www.youtube.com/embed/quPK4Kf5HrY");
new BreakFast("tzatziki contains 54 calories", "only 8 grams of carbohydrates", " Hummus is 100% soy bean", "Tzatziki is made with Greek yogurt", "Hyz0C7i3ysU", "https://www.youtube.com/embed/Hyz0C7i3ysU");
new BreakFast("It contains 60 calories", "Treating Chronic Diseases", "It is a culinary herb or family of herbs", "It contain high amount of Iron", "WEDndTCyGgU", "https://www.youtube.com/embed/WEDndTCyGgU");

new BreakFast('It contains 64 calories', 'Contain Immune-Boosting Nutrients', 'Beneficial for Bone Health', 'Improve High Blood Pressure');



// console.log(BreakFast.allElement);




for (let i = 0; i < section.length; i++) {
    button[i].addEventListener('click', handleClick);
    console.log(i);

    function handleClick(event) {
        let elment = BreakFast.allElement[i];
        section = document.getElementsByClassName('FirstBreakFast')[i];
        console.log(elment);
        console.log(section);
        let ul = document.createElement('ul');
        section.appendChild(ul);
        ul.textContent = 'Nutrition facts:';
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = " ";
        for (let x = 0; x < elment.arr2.length; x++) {
            let li = document.createElement('li')
            ul.appendChild(li);
            li.textContent = '- ' + elment.arr2[x];

        }

        let iframe = document.createElement('iframe');
        section.appendChild(iframe);
        iframe.setAttribute('id', elment.videoId);
        document.getElementById(elment.videoId).src = elment.srcVideo;
        console.log(iframe);

        button[i].removeEventListener('click', handleClick);
        console.log(i);
        console.log(button[i]);

    }

    let iframe = document.createElement('iframe');
    section.appendChild(iframe);
    iframe.setAttribute('id', elment.videoId);
    document.getElementById(elment.videoId).src = elment.srcVideo;

    button[i].removeEventListener('click', handleClick);
    console.log(i);
    console.log(button[i]);
  }
}





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

localStorage.setItem('BFTitles', JSON.stringify(arrayOfRecipesTitles));
localStorage.setItem('BFImages', JSON.stringify(arrayOfRecipesImages));




