const { readFile } = require("fs");

console.log("started first task");

readFile("fundamentals/content/first.txt", "utf-8", (err, result) => {
  // readFile is asynchronous
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");
