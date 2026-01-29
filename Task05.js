// ### Task 5

// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Expected Output:

// Original: [1, 2, 3]
// Copy: [99, 2, 3]

const Input = [1, 2, 3];

// copy array
const copy = [...Input];
copy[0] = 99;

console.log("Original array :", Input);
console.log("Copy array :", copy);
