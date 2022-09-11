let arr = [4, 5, 1, 2,3];
let n = 4;

function missingInt(arr) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  actualSum = (max * (max + 1)) / 2;
  value = actualSum - sum;
  if (value === 0) {
    console.log(max);
  } else {
    console.log(value);
  }
}

missingInt(arr); // 3
