const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("fundamentals/content/first.txt", "utf-8");
    const second = await readFile("fundamentals/content/second.txt", "utf-8");
    await writeFile(
      "fundamentals/content/result-mind-grenade.txt",
      `this is awesome: ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("fundamentals/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };
