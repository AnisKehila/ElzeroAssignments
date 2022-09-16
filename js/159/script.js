console.log('#'.repeat(20));
let currentTime = new Date();
let birthDay = new Date("2002-08-21");

console.log(currentTime - birthDay + " MSec");
console.log((currentTime - birthDay)/1000 + " Sec");
console.log((currentTime - birthDay)/1000/60 + " Minutes");
console.log((currentTime - birthDay)/1000/60/60 + " Hours");
console.log((currentTime - birthDay)/1000/60/60/24 + " Days");
console.log((currentTime - birthDay)/1000/60/60/24/30 + " Months");
console.log((currentTime - birthDay)/1000/60/60/24/30/12 + " Years");

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

console.log('#'.repeat(20));
//-------------------02-------------------

let time = new Date();
time.setTime(10000);
console.log(time);
// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)";
console.log('#'.repeat(20));
//-------------------03-------------------
let myDate = new Date();
myDate.setHours(-11);
console.log(myDate);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

console.log('#'.repeat(20));
//-------------------05-------------------

let start = performance.now();

for(let i = 0 ; i < 99999 ; i++) {
    // document.write(i);
}
let end = performance.now();
console.log(parseInt(end-start));

console.log('#'.repeat(20));
//-------------------06------------------- 

function* gen() {
    let index = 14;
    let num = 140;
    let sum = index + num;
    yield index;
    while (true) {
        yield sum;
        sum += num += 200;
    }
    }
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}