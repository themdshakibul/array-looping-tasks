// # array-looping-tasks

//? ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.
// **Output:

// `['orange', 'yellow', 'green', 'blue', 'red']`

// Input:

const colors = ["red", "blue", "green", "yellow", "orange"];

// console.log(colors.reverse(colors));

//! for loop
const rev_number = [];
for (const num of colors) {
  rev_number.unshift(num);
}
// console.log(rev_number);

//! normal for loop
const rev_numbers = [];

for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  rev_number.unshift(color);
}
// console.log(rev_number);

//! direct for looop
const rev_rev_numbres = [];
for (let i = colors.length - 1; i >= 0; i--) {
  const color = colors[i];
  console.log(color);
  rev_rev_numbres.push(color);
}
console.log(rev_rev_numbres);