'use strict';
let section = document.getElementsByClassName('FirstBreakFast');
let button = document.getElementsByClassName('breakFastBtn');
let star = $("#status0");
star.hide()
$("#status1").hide()
$("#status2").hide()

// let idVideo = ["quPK4Kf5HrY", "Hyz0C7i3ysU", "WEDndTCyGgU"];
// let videoSrc = ["https://www.youtube.com/embed/quPK4Kf5HrY", "https://www.youtube.com/embed/Hyz0C7i3ysU", "https://www.youtube.com/embed/WEDndTCyGgU"];

function BreakFast(elment1, elment2, elment3, elment4, videoId, srcVideo) {
    this.arr = new Array(elment1, elment2, elment3, elment4);
    this.videoId = videoId;
    this.srcVideo = srcVideo;
    BreakFast.allElement.push(this);
}

BreakFast.allElement = [];

new BreakFast("hi", "hi2", "hi3", "hi4", "quPK4Kf5HrY", "https://www.youtube.com/embed/quPK4Kf5HrY");
new BreakFast("hi", "hi22", "hi32", "hi22", "Hyz0C7i3ysU", "https://www.youtube.com/embed/Hyz0C7i3ysU");
new BreakFast("hi", "hi333", "hi3321", "hi123", "WEDndTCyGgU", "https://www.youtube.com/embed/WEDndTCyGgU");

// console.log(BreakFast.allElement);




for (let i = 0; i < BreakFast.allElement.length; i++) {
    button[i].addEventListener('click', handleClick);
    // console.log(i);
    // console.log(button[i]);


    function handleClick(event) {
       $(`#status${i}`).show();
        
        let elment = BreakFast.allElement[i];
        section = document.getElementsByClassName('FirstBreakFast')[i];
        console.log(i);
        console.log(section);
        let ul = document.createElement('ul');
        section.appendChild(ul);
        ul.textContent = 'contents';

        for (let x = 0; x < elment.arr.length; x++) {
            let li = document.createElement('li')
            ul.appendChild(li);
            li.textContent = elment.arr[x];
        }


        let iframe = document.createElement('iframe');
        section.appendChild(iframe);
        iframe.setAttribute('id', elment.videoId);
        document.getElementById(elment.videoId).src = elment.srcVideo;

        button[i].removeEventListener('click', handleClick);
        console.log(i);
        console.log(button[i]);
    }

   
    document.getElementById(`ratingForm${i}`).addEventListener('submit',handleSubmit)
    function handleSubmit(event) {
        event.preventDefault();
    console.log (document.querySelector('input[name=rating]:checked')=== null);
        if (document.querySelector('input[name=rating]:checked')===  null ){
            $(`#status${i}`).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nothing ");
         }
         else if  ((document.querySelector('input[name=rating]:checked') !==  null ) && document.querySelector('input[name=rating]:checked').value <3){
            $(`#status${i}`).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We will improve our services");
         }else if((document.querySelector('input[name=rating]:checked') !==  null ) && document.querySelector('input[name=rating]:checked').value >3){
            $(`#status${i}`).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thank you");
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

}     
  

  
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


//   let img = document.createElement("img");
//   img.setAttribute("src", "http://i.ytimg.com/vi/" 
//                           + youtube.id + "/hqdefault.jpg");
//   img.setAttribute("class", "thumb");


//   let circle = document.createElement("div");
//   circle.setAttribute("class","circle");  

//   youtube.appendChild(img);
//   youtube.appendChild(circle);


//   youtube.onclick = function() {

//     let iframe = document.createElement("iframe");
//     iframe.setAttribute("src",
//           "https://www.youtube.com/embed/" + this.id 
//         + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"); 


//     iframe.style.width  = this.style.width;
//     iframe.style.height = this.style.height;

//     this.parentNode.replaceChild(iframe, this);

//   }; 
// }

