function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("masai school"));

// Method 2
// function reverseString(str) {
//   return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
// }
// console.log(reverseString("hello welcome"));  // --> emoclew olleh
