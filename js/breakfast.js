'use strict';

<<<<<<< HEAD
let div = document.getElementById('Contets');
let section = document.getElementsByClassName('FirstBreakFast');
let button = document.getElementsByClassName('breakFastBtn');


let allElements;



function BreakFast(name1, name2, name3) {
    this.name1 = name1;
    this.name2 = name2;
    this.name3 = name3;
    allElements = [name1, name2, name3];
    console.log(allElements);
}


new BreakFast('ibrahim', 'thear', 'morad');
console.log(allElements);
new BreakFast('fadi', 'wael', 'osama');

for (let i = 0; i < 3; i++) {
    button[i].addEventListener('click', handleClick);

    function handleClick(event) {
        section = document.getElementsByClassName('FirstBreakFast')[i];
        let ul = document.createElement('ul');
        section.appendChild(ul);
        ul.textContent = 'contents';

        for (let x = 0; x < 4; x++) {
            let li = document.createElement('li')
            ul.appendChild(li);
            li.textContent = allElements[x];
            console.log(li.textContent);
        }
        button[i].removeEventListener('click', handleClick)
    }
}
=======
// let section = document.getElementById('FirstBreakFast1');
// let button = document.getElementById('breakFastBtn');
// button.addEventListener('click', handleClick);

// function handleClick(event) {
//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     ul.textContent = 'contents';

//     for (let i = 1; i < 5; i++) {
//         let li = document.createElement('li')
//         ul.appendChild(li);
//         li.textContent = 'helo';
//     }
//     alert("I am indicating that there is something wrong with your input.")
// }


// // let arrOfVotes = [];
// // let arrOfShown = [];
// // function reportResults() {
// //     let ul = document.getElementById('list');
// //     for (let i = 0; i < BusMall.allElements.length; i++) {
// //         arrOfVotes.push(BusMall.allElements[i].votes);
// //         arrOfShown.push(BusMall.allElements[i].imageTimes);
// //         let li = document.createElement('li');
// //         ul.appendChild(li);
// //         li.textContent = `${BusMall.allElements[i].name} had ${BusMall.allElements[i].votes} votes, and was seen ${BusMall.allElements[i].imageTimes} times.`;
// //     }
// //     chart();


// //     button.removeEventListener('click', reportResults);
// // }

// let section=document.getElementsByClassName('FirstBreakFast');
// let button=document.getElementsByClassName('breakFastBtn');

// for(let i=0; i<3;i++){
// button[i].addEventListener('click', handleClick);

// console.log (i);

// function handleClick(event) {
//     section = document.getElementsByClassName('FirstBreakFast')[i];
//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     ul.textContent = 'contents';

//     for (let x = 1; x < 5; x++) {
//         let li = document.createElement('li')
//         ul.appendChild(li);
//         li.textContent = 'helo';
//     }
//     button[i].removeEventListener('click', handleClick);
//     console.log(i);
// }}
>>>>>>> merge-test-main
