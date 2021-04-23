'use strict';

let div = document.getElementById('Contets');
let section=document.getElementsByClassName('FirstBreakFast');
let button=document.getElementsByClassName('breakFastBtn');


// let allElements=[];
// function BreakFast(name1,name2,name3) {
//     this.name1 = name1;
//     this.name2 = name2;
//     this.name3 =name3;
//   allElements.push(this);
//     // console.log(allElements);
// }



for(let i=0; i<3;i++){
button[i].addEventListener('click', handleClick);

function handleClick(event) {
    section = document.getElementsByClassName('FirstBreakFast')[i];
    let ul = document.createElement('ul');
    section.appendChild(ul);
    ul.textContent = 'contents';
    
    for (let x = 0; x < 4; x++) {
        let li = document.createElement('li')
        ul.appendChild(li);
        li.textContent ='hi';
        console.log(li.textContent);
    }
    button[i].removeEventListener('click', handleClick)
}}

