// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Output:**
// 'person working hard a am I'

// **Input:**
const statement = "I am a hard working person";

const word = statement.split(" ");
const rev_reverce = [];

for (let i = word.length - 1; i >= 0; i--) {
  rev_reverce.push(word[i]);
}

const result = rev_reverce.join(" ");
console.log(result);
