// https://oj.masaischool.com/contest/2472/problem/06

let str = "masai";

let vowel = ["a", "e", "i", "o", "u"];
let v = 0;
let c = 0;

function vowelAndConsonent(v, c, vowel) {
  var vowel = ["a", "e", "i", "o", "u"];
  var v = 0;
  var c = 0;
  for (var i = 0; i < str.length; i++) {
    var x = 0;
    for (var j = 0; j < vowel.length; j++) {
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
vowelAndConsonent(v, c, vowel);
