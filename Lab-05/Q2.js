//Write an if statement check if age is 18 or more print eligible to vote.

let age = 20;

if (age < 13) {
    console.log("Child: Not eligible to vote.");
}

if (age >= 18 && age < 21) {
    console.log("Eligible to vote.");
}

if (age >= 21) {
    console.log("Adult - Eligible to vote");
}