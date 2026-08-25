let correctPIN = 1234;
let enteredPIN = 1234;

let balance = 5000;

if (enteredPIN === correctPIN) {

    let choice = 3;

    switch (choice) {

        case 1:
            console.log("Current balance: Rs. " + balance);
            break;

        case 2:
            let withdrawAmount = 7000;

            if (withdrawAmount > balance) {
                console.log("Insufficient funds");
            } else {
                balance = balance - withdrawAmount;
                console.log("Withdrawal successful");
                console.log("New balance: Rs. " + balance);
            }
            break;

        case 3:
            let depositAmount = 2000;

            balance = balance + depositAmount;

            console.log("Deposit successful");
            console.log("New balance: Rs. " + balance);
            break;

        default:
            console.log("Invalid choice");
    }

} else {
    console.log("Wrong PIN. Access Denied.");
}