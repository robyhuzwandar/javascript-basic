// Polindrome is a word, phrase, or sequence that reads the same backward as forward.

const isPolindrome = (str) => {
  // (1)
  // return str === str.split("").reverse().join("");
  // (2)

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPolindrome("madamx"));
