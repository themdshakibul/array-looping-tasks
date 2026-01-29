// ### Task 6
// Given an array of student objects, print each student’s name and marks.

// # Expected ooutput:

// John scored 85
// Alice scored 90
// Example 1
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

for (const student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}

// Method 2
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + "scored " + students[i].marks);
}
