/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let adminsNum = 0 ;
for(let i=0 ; i <myAdmins.indexOf('Stop') ; i++) {
    adminsNum = i+1;
}

document.write(`<div>We Have ${adminsNum} Admins</div><hr>`);

for(let i=0 ; i <myAdmins.indexOf('Stop') ; i++) {
    document.write(`
    <div>
        The admin for team ${i+1} is ${myAdmins[i]}<br>
        <h3>Team members :</h3>
        <ol>
    `);
    let firsLetter = myAdmins[i].charAt(0);
    for(let k=0 ; k<myEmployees.length ; k++) {
        if(myEmployees[k].charAt(0) == firsLetter) {
            document.write(`
            <li>
                ${myEmployees[k]}
            </li>
            `);
        }
    }
    document.write(`</ol><hr>`);
}