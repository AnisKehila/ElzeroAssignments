//--------------------01-------------------------------

setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size) ;
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers).pop());
console.log('#'.repeat(12));

//--------------------02------------------------
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(Array.from(new Set(myFriends)).sort());
console.log('#'.repeat(12));

//--------------------03---------------------------
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
myInfo = new Map(Object.entries(myInfo));
console.log(myInfo);
console.log(myInfo.size);
console.log(myInfo.has('role'));
console.log('#'.repeat(12));

//--------------------04---------------------------

let theNumber = 100020003000;
console.log(+Array.from(new Set([...theNumber.toString()])).sort().join(''));
//-------------------05-----------------------------
let theName = "Elzero";
console.log([...theName]);
console.log([...new Set(theName)]);
console.log(Array.from(theName));
console.log(theName.split(''));
console.log(Object.assign([], theName));
console.log('#'.repeat(12));
//---------------------06--------------------------
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars = chars.sort();
chars.copyWithin(0,3,6);
console.log(chars);
console.log('#'.repeat(12));

//---------------------07--------------------------
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log(numsOne.concat(numsTwo));
console.log([...numsOne , ...numsTwo]);
console.log(Array.from(numsOne.join('') + numsTwo.join('')));
console.log(numsOne.concat(numsTwo));
console.log(numsOne.concat(numsTwo));
// Needed Output [1, 2, 3, 4, 5, 6]
//-------------------08--------------------------

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(
    +[
        ...new Set(
            Array.from(
                [...new Set(n1, n2)].pop().toString().concat(n1.shift().toString())
            )
            .sort()
            .reverse()
        ),
    ].join("")
); // 210