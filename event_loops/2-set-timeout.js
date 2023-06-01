console.log("first");
setTimeout(() => {
  // this creates asynchronicity and offloading so third will appear before second
  console.log("second");
}, 0);
console.log("third");
