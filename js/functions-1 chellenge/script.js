/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a , b , c) {
    let Name , Age , Status ;
    let info = [a,b,c];
    for(let i=0 ; i<info.length; i++) {
        switch (typeof info[i]) {
            case 'string' :
                Name = info[i];
                break;
            case 'number' :
                Age = info[i];
                break;
            case 'boolean' :
                Status = info[i];
                break;
        }
    }
    if(Status == true ){
        console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`)
    } else {
        console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`)
    }
    
        
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"