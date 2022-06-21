// 1. Write a JavaScript program to list the properties of a JavaScript object.

const family = {
  mother: "Anna",
  father: "Robert",
  son: "Filip",
};

function objProperties(obj) {
  results = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      results += `${key}\n`;
    }
  }
  return console.log(results);
}

console.log(objProperties(family));
