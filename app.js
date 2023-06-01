const { readFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    return;
  } else {
    console.log(result);
  }
});
