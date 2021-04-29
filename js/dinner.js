
'use strict';
let section = document.getElementsByClassName('FirstBreakFast');
let button = document.getElementsByClassName('breakFastBtn');
let star = $("#status0");
star.hide()
$("#status1").hide()
$("#status2").hide()
$("#status3").hide()

// let idVideo = ["quPK4Kf5HrY", "Hyz0C7i3ysU", "WEDndTCyGgU"];
// let videoSrc = ["https://www.youtube.com/embed/quPK4Kf5HrY", "https://www.youtube.com/embed/Hyz0C7i3ysU", "https://www.youtube.com/embed/WEDndTCyGgU"];



function BreakFast(elment1, elment2, elment3, elment4, videoId, srcVideo) {
  this.arr = new Array(elment1, elment2, elment3, elment4);
  this.videoId = videoId;
  this.srcVideo = srcVideo;
  BreakFast.allElement.push(this);
}

BreakFast.allElement = [];


new BreakFast('This comes with 47 calories', 'It contains 5.3 grams of carbohydrates', 'It contains 2.7g of protein', 'It contains 162.7mg sodium', 'USgUYHOfSsk', 'https://www.youtube.com/embed/USgUYHOfSsk');
new BreakFast('This comes with 582 calories', 'It contains 100.72 grams of carbohydrates', 'It contains 11 g of total Fat', 'It contains 15g of protein', 'sv3TXMSv6Lw', 'https://www.youtube.com/embed/sv3TXMSv6Lw');
new BreakFast('This comes with 163 calories', 'It contains 41g of carbohydrates', 'It contains 31g of sugars', 'It contains 96.4mg of vitamin C', 'Zp-F68Fa-ps', 'https://www.youtube.com/embed/Zp-F68Fa-ps');
new BreakFast('This comes with 184 calories', 'It contains 15.8g of fat', 'It contains 12.3g of carbohydrates', 'It contains 2.5g of protein','23tGra9KBa0','https://www.youtube.com/embed/23tGra9KBa0');




for (let i = 0; i < section.length; i++) {
  button[i].addEventListener('click', handleClick);
  console.log(i);

  // i=[0,1,2,3]
  function handleClick(event) {
    event.preventDefault()
    $(`#status${i}`).show();
    console.log(i);
    let elment = BreakFast.allElement[i];
    section = document.getElementsByClassName('FirstBreakFast')[i];
    console.log(elment);
    console.log(section);
    let ul = document.createElement('ul');
    $(`#status${i}`).append(ul);
    ul.textContent = 'Nutrition facts:';
    let li = document.createElement('li');
    $(`#status${i}`).append(li);
    li.textContent = ' ';
    for (let x = 0; x < elment.arr.length; x++) {
      let li = document.createElement('li');
      $(`#status${i}`).append(li);
      ul.appendChild(li);
      li.textContent = '- ' + elment.arr[x];
      li.classList.add("mystyle");

    }
    let iframe = document.createElement('iframe');
    $(`#status${i}`).append(iframe);
    iframe.setAttribute('id', elment.videoId);
    document.getElementById(elment.videoId).src = elment.srcVideo;

    button[i].removeEventListener('click', handleClick);
    console.log(i);
    console.log(button[i]);

  }



  document.getElementById(`ratingForm${i}`).addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault();
    // console.log (document.querySelector('input[name=rating]:checked')=== null);
    console.log(i);
    if (document.querySelector(`input[name=rating]:checked`) == null) {

      Swal.fire({
        title: 'Rate Us Please',
        // text: 'Modal with a custom image.',
        imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
      $(`#status${i}`).hide();
    } else if ((document.querySelector(`input[name=rating]:checked`) != null) && document.querySelector(`input[name=rating]:checked`).value < 3) {
      Swal.fire({
        title: 'We Will Improve Our Service',
        // text: 'Modal with a custom image.',
        imageUrl: 'https://images.unsplash.com/photo-1607919564479-c2e00f3b14a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
      // document.querySelector(`input[name=rating]:checked`).reset();
      $(`#status${i}`).hide();
    } else if ((document.querySelector(`input[name=rating]:checked`) != null) && document.querySelector(`input[name=rating]:checked`).value >= 3) {
      // $(`#status${i}`).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thank you");
      Swal.fire({
        title: 'Thank You ',
        // text: 'Modal with a custom image.',
        imageUrl: 'https://images.unsplash.com/photo-1619502735729-13b7525f13e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
      $(`#status${i}`).hide();
      // document.querySelector(`input[name=rating]:checked`).reset();

    }
    $(`#status${i}`).hide();

  }

}




//         $(`form#ratingForm${i}`).submit(function(e) 
//         {
//          console.log($(`#ratingForm${i} :radio:checked`)); 
//          console.log(i); 
//             if ($(`#ratingForm${i} [value=] :radio:checked`).length == 0) {
//                 $(`#status${i}`).html("nothing checked");
//                 return false;
//             } else {
//                 $(`#status${i}`).html( 'You picked ' + $(`input:radio[name=rating${i}]:checked`).val() );
//             }

//         });





// function myFunction() {
//     let x = document.getElementById("hi");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
// }



// show videos 2
// let videos = document.getElementsByClassName("youtube"); 

// for (let i=0; i<videos.length; i++) {

//   let youtube = videos[i];
  let lunchImages = document.getElementsByClassName('imgeSection');
  let lunchTitles = document.getElementsByClassName('recipeTitle');
  let arrayOfRecipesTitles = [];
  let arrayOfRecipesImages = [];

  for (let i = 0; i < lunchTitles.length; i++) {
    arrayOfRecipesTitles.push(lunchTitles.item(i).innerHTML);
  }
  for (let i = 0; i < lunchImages.length; i++) {
    arrayOfRecipesImages.push(lunchImages.item(i).currentSrc);
  }
  localStorage.setItem('DTitles', JSON.stringify(arrayOfRecipesTitles));
  localStorage.setItem('DImages', JSON.stringify(arrayOfRecipesImages));