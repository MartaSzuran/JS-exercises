// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
  rollo: 12,
  rollno: 12,
};

function getLengthOfObject(obj) {
  return Object.keys(obj).length;
}

console.log(getLengthOfObject(student));
