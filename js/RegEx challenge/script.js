// ---------Assignment 01 ----------------
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/i;
console.log(ipRe.test(ip));
console.log('--------------------------------------------'); 

// ---------Assignment 02 ----------------
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesRe = /Os\d*O/ig;
console.log(specialNames.match(specialNamesRe));
console.log('--------------------------------------------'); 

// ---------Assignment 03 ----------------
let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/i;
console.log(phoneRe.test(phone));
console.log('--------------------------------------------'); 

// ---------Assignment 04 ----------------
let rE = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
//https? : contains zero ore one S 

// ---------Assignment 05 ----------------
let date1 = "11/1/1111";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 11 82";

let re = /\d{2}(\/||\s||\s-\s)\d{2}(\/||\s||\s-\s)\d{2}/; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
console.log('--------------------------------------------'); 

// ---------Assignment 05 ----------------

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let urlRe = /(https?:\/\/)?(:[\w]+\.)?([\w]+)\.\w+(?:\.\w+)?\/?.*/i;

console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));