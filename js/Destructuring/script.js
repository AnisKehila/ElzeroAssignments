/*
    Destructuring
    - Challenge
*/

let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [Osama , Ahmed , Sayed] = myFriends;

if(chosen == 1 ) {
    let {title , age , available , skills : [,lastSkill] } = Osama;
    console.log(title);
    console.log(age);
    if(available) {
        console.log(`${title} is availabe for work`);
    } else {
        console.log(`${title} isn't availabe for work`);
    }
    console.log(lastSkill);
}
if(chosen == 2 ) {
    let {title , age , available , skills : [,lastSkill] } = Ahmed;
    console.log(title);
    console.log(age);
    if(available) {
        console.log(`${title} is availabe for work`);
    } else {
        console.log(`${title} isn't availabe for work`);
    }
    console.log(lastSkill);
}
if(chosen == 3 ) {
    let {title , age , available , skills : [,lastSkill] } = Sayed;
    console.log(title);
    console.log(age);
    if(available) {
        console.log(`${title} is availabe for work`);
    } else {
        console.log(`${title} isn't availabe for work`);
    }
    console.log(lastSkill);
}