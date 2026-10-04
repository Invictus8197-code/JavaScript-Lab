//Task 1.1
function isAdult(age) {
    return age >= 18;
}
 
console.log(isAdult(13));
console.log(isAdult(18));
console.log(isAdult(22));


//Task 1.2
function calculateDiscount(price, isMember) {
    if (isMember) {
        return price * 0.9;
    } else {
        return price;
    }
}
 
console.log(calculateDiscount(400, true));
console.log(calculateDiscount(800, false));


//Task 2.1
const isAdultExpression = function(age) {
    return age >= 18;
};
 
console.log(isAdultExpression(21));


//Task 2.2
const square = n => n * n;
 
console.log(square(4));
console.log(square(6));
console.log(square(8));


//Task 2.3
const fullName = (first, last) => first + " " + last;
 
console.log(fullName("Ankit", "Nag"));


//Task 3.1
function calculatePrice(price, tax = 0.18) {
    return price + (price * tax);
}
 
console.log(calculatePrice(1000, 0.5));
console.log(calculatePrice(800));


//Task 3.2
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5));


//Task 4.1
let taxRate = 0.18;
 
function finalPrice(amount) {
    return amount + (amount * taxRate);
}
 
console.log(finalPrice(800));


//Task 4.2
// let taxRate = 0.18;
 
// function showLocalTax() {
//     let taxRate = 0.05;
//     console.log(taxRate);
// }
 
showLocalTax();
console.log(taxRate);


//Task 5.1
if (true) {
    let insideValue = "Inside block";
    console.log(insideValue);
}
 
console.log(typeof insideValue); 


//Task 5.2
if (true) {
    var insideValueVar = "Inside block";
    console.log(insideValueVar);
}
 
console.log(insideValueVar);


//Task 6.1
function outerFunction() {
    let message = "Hey there from outer function!";
 
    function innerFunction() {
        console.log(message);
    }
 
    innerFunction();
}
 
outerFunction();


//Task 6.2
let role = "guest";
 
function loginAsAdmin() {
    let role = "admin";
    console.log(role);
}
 
loginAsAdmin();
console.log(role);


//Task 7
let totalFeeCollected = 0;
 
function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 60) return "C";
    else return "F";
}
 
const calculateLateFee = function(daysLate = 0) {
    return daysLate * 10;
};
 
const processStudent = (name, marks, daysLate = 0) => {
    const grade = calculateGrade(marks);
    const fee = calculateLateFee(daysLate);
    totalFeeCollected += fee;
    console.log(name + " - Grade " + grade + ", Late Fee Rs." + fee);
};
 
processStudent("Aditi", 92);
processStudent("Rohit", 68, 3);
processStudent("Meera", 55, 5);
 
console.log("Final Total Fee:", totalFeeCollected);


//Task 8.1
function addNumbers(a, b) {
   return a + b;
}
 
console.log(addNumbers(5, 3));


//Task 8.2
let discount = 0;
 
function setDiscount() {
    discount = 20;
}
 
setDiscount();
console.log(discount);


//Task 8.3
let balance = 1000;
function withdraw(balance, amount) {
    balance = balance - amount;
    return balance;
}
 
balance = withdraw(balance, 200);
console.log(balance);


//Task 8.4
const sayHello = function() {
    console.log("Hi!");
};
 
sayHello();