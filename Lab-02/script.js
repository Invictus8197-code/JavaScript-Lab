// Marks in 3 subjects
let marks1 = 85;
let marks2 = 78;
let marks3 = 82;

let attendance = 80;

// Calculate total marks and average marks
let total = marks1 + marks2 + marks3;
let average = total / 3;

// Decide the grade using nested ternary
let grade = average >= 90 ? "A"
          : average >= 75 ? "B"
          : average >= 40 ? "C"
          : "F";

// Check the typeof average
console.log("Average type:", typeof average);

// Scholarship eligibility
let isEligibleForScholarship = average >= 85 && attendance >= 75;

// 5. Final summary
console.log(
    "Total: " + total +
    ", Average: " + average.toFixed(2) +
    ", Grade: " + grade
);

console.log("Scholarship Eligible: " + isEligibleForScholarship);