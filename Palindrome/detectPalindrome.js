// Q https://oj.masaischool.com/contest/2487/problem/1

let num = `1221`;
// output --> Yes

function detectPalindrome(num) {
  let n = num.length;
  for (let i = 0; i < num / 2; i++) {
    if (num[i] !== num[n - 1 - i]) {
      console.log("No");
      break;
    } else {
      console.log("Yes");
      break;
    }
  }
}

detectPalindrome(num);
