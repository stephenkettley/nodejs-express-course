const { writeFileSync } = require("fs");

for (let n = 0; n < 10000; n++) {
  writeFileSync("fundamentals/content/big.txt", `hello world ${n}\n`, {
    flag: "a",
  });
}
