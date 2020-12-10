"use strict";

// To String

// 1) Преобразования типа
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Конкатенация
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';


// To Number

// 1)
console.log(typeof(Number('4')));

// 2) Унарный плюс
console.log(typeof(+'4'));
let answ = +prompt("Hello", "");

// 3) Парсинг в десятичную систему
console.log(typeof(parseInt('15px',10)));


// To Boolean

// 1) Нативный способ

// False - 0, '', null, undefined, NaN;
// True - все остальное, включая пустые массивы и объекты

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2) Преобразования типа
console.log(typeof(Boolean('4')));

// 3) Два знака отрицания
console.log(typeof(!!"4444"));