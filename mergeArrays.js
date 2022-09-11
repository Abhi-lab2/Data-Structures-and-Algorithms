// https://oj.masaischool.com/contest/4518/problem/20

// Merge  Two Arrays

let n = 4;
let arr1 = [1, 5, 7, 9];
let arr2 = [2, 4, 6, 8];

function merge(n, arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  // for corner cases
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  console.log(res.join(" "));
}
merge(n, arr1, arr2);
