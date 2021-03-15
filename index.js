const chalk = require("chalk");

console.log(chalk.red("hello"));

const charCount = (string) => {
  let result = {};
  const puncuations = [" ", ".", "?", "!"]

  for (let i = 0; i < string.length; i++) {
    let el = string[i];
    if (puncuations.includes(el)) {
      continue;
    } else if (result[el]) {
      ++result[el];
    } else {
      result[el] = 1;
    }
  }
  return result;
};

console.log(charCount("hello how are you doing?"));
