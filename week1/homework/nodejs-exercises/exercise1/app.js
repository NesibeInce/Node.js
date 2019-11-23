const padLeft = require("./andrejs-awesome-function");
numbers = ["12", "846", "2", "1236"]

numbers.forEach(function (number) {
  console.log(padLeft.padLeft(number, 4, ""));
});