//Age is less than 5 movie ticket price is free, Age is less than 12 and more than 5 movie ticket price is 100, Age is less than 60 and, more than 12 movie ticket price is 250 else 150.

<<<<<<< HEAD
function ticketPrice(age) {
=======
let age = 65
>>>>>>> 75ad8e0 (Update the Lab)

    if (age < 5) {
        console.log("Age:", age);
        console.log("Free Ticket");
    }
    else if (age >= 5 && age < 12) {
        console.log("Age:", age);
        console.log("Ticket Price: 100 Rs");
    }
    else if (age >= 12 && age < 60) {
        console.log("Age:", age);
        console.log("Ticket Price: 250 Rs");
    }
    else {
        console.log("Age:", age);
        console.log("Ticket Price: 150 Rs");
    }
}

<<<<<<< HEAD
// Case 1
ticketPrice(3);
=======
else if (age > 5 && age < 12) {
    console.log("TICKET PRICE: 100 Rs");
}
>>>>>>> 75ad8e0 (Update the Lab)

// Case 2
ticketPrice(10);

// Case 3
ticketPrice(30);

