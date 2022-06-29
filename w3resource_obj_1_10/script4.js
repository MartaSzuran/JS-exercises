let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function readObjProperites(listOfObj) {
  console.log(listOfObj);
  for (let i = 0; i < listOfObj.length; i++) {
    if (listOfObj[i].readingStatus) {
      console.log(`you have already read: ${listOfObj[i].title}`);
    }
    if (!listOfObj[i].readingStatus) {
      console.log(`you need to read: ${listOfObj[i].title}`);
    }
  }
}

readObjProperites(library);
