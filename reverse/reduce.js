const reverseString = (str) => {
  return Array.from(str).reduce((reverse, s) => s + reverse, "");
};

const str = "Hello World";
const reversed = reverseString(str);

console.log(reversed);
