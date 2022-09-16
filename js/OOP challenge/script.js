//-------------01----------------------
console.log('===============01================');
class Car {
    constructor(name,model,price) {
        this.n = name;
        this.m = model;
        this.p = price;
    };
    run() {
        return "Car Is Running Now";
    };
    stop() {
        return "Car Is Stopped";
    };
}

let KIA = new Car('Pecanto',2019,290000);
let FORD = new Car('Mustang',2014,720000);
let GOLF = new Car('GOLF 8',2022,800000);
console.log(`Car One Name Is ${KIA.n} And Model Is ${KIA.m} And Price Is ${KIA.p}`);
console.log(KIA.run());
//-------------02----------------------
console.log('==============02=================');
class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

  // Write Tablet Class Here
class Tablet extends Phone {
    constructor(name, serial, price,size) {
        super(name, serial, price);
        this.size = size;
    }
    fullDetails() {
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size || 'Unknown'}`;
    }
}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);
console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown

  //-------------03----------------------
console.log('===============03================');
// Edit The Class
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        if(String(card)[4] === '-' && String(card)[9] === '-' && String(card)[14] === '-') {
            this.#c = String(card);
        } else {
            this.#c = String(card).substr(0,4) + '-' + String(card).substr(4,4) + '-' + String(card).substr(8,4) + '-' + String(card).substr(12,4);
        }
        this.showData = `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
    }
}

  // Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined


  // Write Your Code Here

  //-------------04----------------------
console.log('===============04================');

String.prototype.addLove = function () { return 'I Love Elzero Web School'};
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School


  //-------------05----------------------
console.log('===============05================');

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

  // Write Your Code Here
Object.defineProperties(myObj , {
    id : {
        enumerable : false
    } , 

    score : {
        writable : false
    }
});
delete myObj.country;
myObj.score = 500;

for (let prop in myObj) {
console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}