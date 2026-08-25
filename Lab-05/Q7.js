// Make a variable called mood, with a value like "happy", "sad", "angry", or "tired". Use switch-case to print a short matching message for each mood, plus a default message for any other mood.

let mood = "happy";

switch (mood) {
    case "happy":
        console.log("Keep smiling!");
        break;

    case "sad":
        console.log("Everything will be okay.");
        break;

    case "angry":
        console.log("Take a deep breath.");
        break;

    case "tired":
        console.log("Get some rest.");
        break;

    default:
        console.log("I don't understand that mood.");
}