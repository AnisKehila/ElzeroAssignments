/*
    Higher Order Functions Challenges

    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only In The Code

    You Cannot Use
    - Numbers
    - Letters

    - You Must Use [Filter + Map + Reduce + Your Knowledge]
    - Order Is Not Important
    - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let letterZ = myString[myString.length-true];
let solution = myString.split("").filter(function(ele) {
    return isNaN(ele) && ele !== letterZ && ele !== ",";
}).map(function(ele) {
    return ele == "_" ? ele.replace("_" , " ") : ele;
}).reduce(function (acc , current) {
    if(acc === current) {
        return `${acc}`;
    } else {
        return `${acc}${current}`;
    }
})
console.log(solution); // Elzero Web School