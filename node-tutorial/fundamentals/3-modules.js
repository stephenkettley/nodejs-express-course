// modules
// commonjs - every file is a module - encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
console.log(names);

const data = require("./6-alternative_export");

require("./7-mind-grenade");

sayHi("kelly");
sayHi(names.john);
sayHi(names.steve);
sayHi(names.mike);
