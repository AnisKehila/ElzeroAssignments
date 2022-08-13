// let userName = "Elzero";
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.slice(0,1).toLowerCase()); // e
// console.log(userName.substring(0,1).toLowerCase()); // e
// console.log(userName[userName.length - userName.length].toLowerCase().repeat(3)); // eee
//----------------------2---------------------------------------
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word[0].includes(letterE.toUpperCase())); // True
console.log(word[word.length-1].includes(letterO.toLowerCase())); // True