// https://oj.masaischool.com/contest/2472/problem/06

let str = "ankush";

function vowelConsonents(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let v = 0;
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    let x = 0;
    for (let j = 0; j < vowel.length; j++) {
      if (str[i] == vowel[j]) {
        x = 1;
        break;
      }
    }
    if (x == 1) {
      v = v + 1;
    } else {
      c = c + 1;
    }
  }
  console.log(v + " " + c);
}
vowelConsonents(str);
