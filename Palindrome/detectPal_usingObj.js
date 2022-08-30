// https://oj.masaischool.com/contest/2644/problem/05
// https://oj.masaischool.com/contest/2644/problem/02
// https://medium.com/altogic/backend-basics-restful-api-api-rest-methods-json-examples-429744ba0831

let N = 6;
// var string = "128321";
var string = "123321";

function detectPalII(N, string) {
  var obj = {};

  for (var i = 0; i < string.length; i++) {
    var count = string[i]; //
    if (obj[count] == undefined) {
      obj[count] = 1;
    } else {
      obj[count] = obj[count] + 1; //
    }
  }
  var x = 0;
  for (var key in obj) {
    if (obj[key] % 2 == 1) {
      x++;
    }
  }
  if (x >= 2) {
    console.log("Not Possible!");
  } else {
    console.log("Possible!");
  }
}
detectPalII(N, string);
