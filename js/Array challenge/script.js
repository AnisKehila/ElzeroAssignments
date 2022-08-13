/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
    
console.log(my.slice(zero , counter).concat(my[counter]).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Mazero") , counter).reverse()); // ["Elham", "Mazero"]

console.log(my[my.indexOf("Elham")].slice(zero , my.indexOf("Elham")) + my[my.indexOf("Mazero")].slice(my.indexOf("Elham"))); // "Elzero"

console.log(my[my.indexOf("Ameer")].slice(my.indexOf("Gamal")) + my[my.indexOf("Osama")].charAt(zero)); // "rO"