// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const myDate = new Date();
console.log(myDate);

const daysOfWeek = [
  "sunday",
  "monday",
  "Tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const myHour = `Current time is : ${myDate.getHours()} : ${myDate.getMinutes()} : ${myDate.getSeconds()}`;
const dayNumb = myDate.getDay();
const myDay = `Today is : ${daysOfWeek[dayNumb]}`;
console.log(myHour);
console.log(myDay);
