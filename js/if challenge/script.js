/*
    If Condition Challenge
*/

let a = 10;

    a < 10
    ? console.log(10)
    :a >= 10 && a <= 40
    ? console.log("10 To 40")
    :a > 40
    ? console.log("> 40")
    :console.log("Unknown");


// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase()=== "w") {
    console.log("Good");
}

if (typeof Number(st) !== "string") {
    console.log("Good");
}

if (typeof Number(st)  === "number") {
    console.log("Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}