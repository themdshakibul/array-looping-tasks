// ### Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.
// Expected Array:
[
  [1, 2],
  [99, 4],
  [5, 6],
];

// input:
const array = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// 2D array
//! Method 1
// update 2n row , first item to 99
array[1][0] = 99;
// print the update array
console.log(array);

//! for loop Method 2
//loop through rows
for (let i = 0; i < array.length; i++) {
  // check the 2nd row (index 1)
  if (i === 1) {
    array[i][0] = 99; //update first item
  }
}
console.log(array);
