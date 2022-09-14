// Using 2 pointers

// https://oj.masaischool.com/contest/2749/problem/01

let n = 4;
let K = 9;
let arr = [2, 7, 11, 15];

function twoSum(n, K, arr) {
  var left = 0;
  var right = arr.length - 1;
  var sum = 0;
  var bag = [];
  var count = 0;

  while (left < right) {
    sum = arr[left] + arr[right];

    if (sum < K) {
      left++;
    } else if (sum > K) {
      right--;
    } else {
      bag.push(left, right);
      count++;
      break;
    }
  }
  if (count === 0) {
    console.log("-1 -1"); //if not found
  } else {
    console.log(bag.join(" "));
  }
}
twoSum(n, K, arr); // 0 1

//In this we have to print the "indexes" of the two numbers whose SUM is eq to K
