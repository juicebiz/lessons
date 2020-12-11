'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('div'),
      wrapper = document.querySelector('.wrapper');

console.dir(box);  

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: red; width: 500px;';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black');

document.body.append(div);

wrapper.prepend(div);

//hearts[0].after(div);

//circles[0].remove();

//hearts[0].replaceWith(circles[0]);

// Устаревшие методы
wrapper.appendChild(div);
wrapper.replaceChild(circles[1], hearts[1]);

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');
