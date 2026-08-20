//Store a correct PIN like 1234 in one variable store a guess in other variable if guess match correct PIN  print access granted if not print access denied.

const PIN = 8192

let guess = String("Enter guess number");

if (guess == PIN) {
    console.log("Access Granted");
}

else {
    console.log("Access Denied");
}