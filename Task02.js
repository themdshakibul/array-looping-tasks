// ### Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// **Output:

// [12, 98, 76, 46]

//**Input:
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumber.push(numbers[i]);
  }
}
console.log(evenNumber);
