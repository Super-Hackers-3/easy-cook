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

new BreakFast("hi", "hi2", "hi3", "hi4", "quPK4Kf5HrY", "https://www.youtube.com/embed/quPK4Kf5HrY");
new BreakFast("hi", "hi22", "hi32", "hi22", "Hyz0C7i3ysU", "https://www.youtube.com/embed/Hyz0C7i3ysU");
new BreakFast("hi", "hi333", "hi3321", "hi123", "WEDndTCyGgU", "https://www.youtube.com/embed/WEDndTCyGgU");
// console.log(BreakFast.allElement);










for (let i = 0; i < BreakFast.allElement.length; i++) {
    button[i].addEventListener('click', handleClick);
    // console.log(i);
    // console.log(button[i]);


    function handleClick(event) {
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
}