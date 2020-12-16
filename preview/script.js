"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');
    ;

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second Click');
// };

// btn.addEventListener('mouseenter', (event) => {
//     console.log(event.target);
//     event.target.remove();
// });

// btn.addEventListener('click', () => {
//     alert('Second Click');
// });



let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {        
    //     btn.removeEventListener('click', deleteElement());
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

// Отменяем действие по умолчанию
link.addEventListener('click', (event) => {
    event.preventDefault();
});


