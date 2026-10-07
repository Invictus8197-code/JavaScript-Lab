//Task1.1
console.log(city);
var city = "Haridwar";
console.log(city);


//Task1.2
function showMessage() {
    console.log(message);
    var message = "Hello";
    console.log(message);
}
 
showMessage();


// Task1.3
var name = "global";
function test() {
    console.log(name);
    var name = "local";
}
 
test();


// Task1.4
console.log(food);
var food = "Pizza";
console.log(food);


// Task2.1
// sayHi();
// var sayHi = function () {
//     console.log("Hi!");
// };


// Task2.2
// sayHi();
// const sayHi = function () {
//     console.log("Hi!");
// };


// Task2.4
console.log(fnA());
function fnA() { return "First"; }
function fnA() { return "Second"; }


// Task2.5
wakeUp();
eatBreakfast();
goToCollege();
 
function wakeUp() {
    console.log("Wake up!");
}
 
function eatBreakfast() {
    console.log("Eat breakfast!");
}
 
function goToCollege() {
    console.log("Go to college!");
}


// Task3.1
// console.log(PI);
// const PI = 3.14;


// Task3.2
// console.log(typeof x);
// var x = 5;
// console.log(typeof y);
// let y = 5;

// Task3.4 a
console.log(a);
var a = 5;


// Task3.4 b
// console.log(b);
// let b = 10;


// Task3.4 c
// hello();
// var hello = function() { console.log("Hi"); };


// Task3.4 d
// greet();
// function greet() { console.log("Hello"); }


// Task4.1
function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());


// Task4.2
// const counter = makeCounter();
// console.log(count);


// Task4.3
function makeMultiplier(n) {
    return function (x) {
        return x * n;
    };
}
 
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5), triple(5)); // 10 15


// Task4.4
// function makeGreeter(greeting) {
//     return function (name) {
//         return greeting + ", " + name + "!";
//     };
// }
 
// const greet = makeGreeter("Namaste");
// console.log(greet("Aditi"));


// Task4.5
function makeCupCounter() {
    let cups = 0;
    return function () {
        cups++;
        return "Cup number " + cups + " of chai";
    };
}
 
const friendA = makeCupCounter();
const friendB = makeCupCounter();
 
console.log(friendA());
console.log(friendA());
console.log(friendA());
console.log(friendB());
console.log(friendB());


// Task5.1
// function createWallet(start) {
//     let balance = start;

//     return {
//         add(n) {
//             balance += n;
//             return balance;
//         },

//         spend(n) {
//             if (n > balance) return "Insufficient balance";

//             balance -= n;
//             return balance;
//         },

//         show() {
//             return balance;
//         }
//     };
// }

// const wallet = createWallet(100);

// console.log(wallet.add(50));     
// console.log(wallet.spend(30));    
// console.log(wallet.spend(500));    
// console.log(wallet.show());       
// console.log(wallet.balance);    


// wallet.balance = 99999;

// console.log(wallet.show());


// Task5.2
function createWallet(start) {
    let balance = start;
    return {
        add(n) { balance += n; return balance; },
        spend(n) {
            if (n > balance) return "Insufficient balance";
            balance -= n;
            return balance;
        },
        show() { return balance; },
        reset() { balance = start; return balance; }
    };
}
 
// const wallet = createWallet(100);
// wallet.add(50);
// console.log(wallet.show());
// console.log(wallet.reset());


// Task5.3
function limiter(max) {
    let used = 0;
    return function () {
        if (used < max) {
            used++;
            return "Attempt " + used + " of " + max;
        } else {
            return "Locked!";
        }
    };
}
 
const tryLogin = limiter(3);
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());


// Task5.4
function createDiary() {
    let entries = [];
 
    return {
        write(text) {
            entries.push(text);
        },
        read() {
            return entries;
        }
    };
}
 
const diary = createDiary();
diary.write("Learn closures");
diary.write("Practice JavaScript");
 
console.log(diary.read());
console.log(diary.entries);


// Task6.1 var
const withVar = [];

for (var i = 0; i < 3; i++) {
    withVar.push(() => i);
}

console.log(withVar.map(f => f()));



// Task6.1 let
const withLet = [];

for (let j = 0; j < 3; j++) {
    withLet.push(() => j);
}

console.log(withLet.map(f => f()));



// Task6.2
for (var k = 1; k <= 3; k++) {
    setTimeout(() => console.log("var:", k), 1000);
}
 
for (let m = 1; m <= 3; m++) {
    setTimeout(() => console.log("let:", m), 1000);
}



// Task6.3
for (let k = 1; k <= 3; k++) {
    setTimeout(() => console.log("var:", k), 1000);
}



// Task7
// const wallet = createWallet(500);
// const loginGuard = limiter(3);

// console.log("Added:", wallet.add(200));

// if (loginGuard()) {
//     console.log("Spent:", wallet.spend(150));
// }

// if (loginGuard()) {
//     console.log("Spent:", wallet.spend(1000));
// }

// console.log("Current Balance:", wallet.show());

// console.log("History:");
// console.log(wallet.history());

// console.log("Final Summary:");
// console.log(
//     "Balance: " + wallet.show() +
//     " | Transactions: " + wallet.history().length
// );



// function createWallet(start) {
//     let balance = start;
//     let transactions = [];

//     return {
//         add(n) {
//             balance += n;
//             transactions.push("Added " + n);
//             return balance;
//         },

//         spend(n) {
//             if (n > balance) {
//                 return "Insufficient balance";
//             }

//             balance -= n;
//             transactions.push("Spent " + n);
//             return balance;
//         },

//         show() {
//             return balance;
//         },

//         history() {
//             return [...transactions];
//         }
//     };
// }


// function limiter(max) {
//     let used = 0;

//     return function () {
//         if (used < max) {
//             used++;
//             return true;
//         }

//         return false;
//     };
// }




// function makeDiscount(percent) {
//     return function (price) {
//         return price - (price * percent / 100);
//     };
// }



// Task8.1
var total = 5;
console.log(total);


// Task8.2
var greet = function () { console.log("Hi"); };
greet();


// Task8.3
function makeCounter() {
    let c = 0;
    return function () {
        c++;
        return c;
    };
}
 
const next = makeCounter();
console.log(next(), next());


// Task8.4
function makeCounter2() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
 
const n = makeCounter2();
console.log(n(), n(), n());
