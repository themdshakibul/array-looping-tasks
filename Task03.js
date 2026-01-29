// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Output:**

// `'TomTimTinTik'`

// **Input:**
var numbers = ["Tom", "Tim", "Tin", "Tik"];

// Basic and clean Method 2
let resul = "";

for (const word of numbers) {
  resul += word;
}
console.log(resul);

// Method three
let combainedString = "";

for (const item of numbers) {
  combainedString += item;
}
console.log(combainedString);

// for of condition Method 2
let result = "";

for (const item of numbers) {
  if (item.length > 0) {
    result += item;
  }
}
console.log(result);
