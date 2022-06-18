// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// ex.3
// 3. Write a JavaScript program to get the current date.

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}

const dayString = `${month}-${day}-${date.getFullYear()}`;

console.log(dayString);
