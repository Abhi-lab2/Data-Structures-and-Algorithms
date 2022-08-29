// https://oj.masaischool.com/contest/2472/problem/07
let n = 7;
let str = "racecar";
// let str = "masai"

function checkPalindrome(n, str) {
  let total_length = str.length;

  for (let i = 0; i < total_length / 2; i++) {
    if (str[i] !== str[total_length - 1]) {
      console.log("No");
      break;
    } else {
      console.log("Yes");
      break;
    }
  }
}
checkPalindrome(n, str);
