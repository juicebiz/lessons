"use strict";

let x = 5; alert( x++ );

// NaN
console.log(typeof([] + false - null + true));

// 2
let y = 1; 
let x = y = 2;
console.log(x);

// "12"
console.log([] + 1 + 2);

// "1"
console.log( "1"[0] );

// null - оператор И работает слева направо и как только натыкается на false заканчивает действие
console.log( 2 && 1 && null && 0 && undefined );

// !! превращает выражение в булиновое, а И выдает последнее значение
console.log(!!(1 && 2) === (1 && 2));

// ИЛИ заканчивает работать на true, И выдает последнее значение
console.log( null || 2&&3 || 4);

// false - Разные хранилища информации с одинаковыми данными
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);

console.log( +"Infinity" );

// False - Посимвольное сравнение в Unicode
console.log( "Ёжик" > "яблоко");

// 2
console.log( 0 || "" || 2 || undefined || true || false);