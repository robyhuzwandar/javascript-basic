const reverseString = (str) => {
  let reverse = "";
  for (const s of str) {
    reverse = s + reverse;
  }

  return reverse;
};

const str = "Hello World";
const reversed = reverseString(str);

console.log(reversed);
