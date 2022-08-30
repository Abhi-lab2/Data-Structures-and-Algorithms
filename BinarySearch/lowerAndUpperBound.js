// In lower Bound if finds the lowest element index and gives as a output
let arr = [1, 2, 1, 4, 5, 6];
let target = 4;
let n = 6;

function lowerBound(n, target, arr) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (target === arr[mid]) {
      res = mid;
      end = mid - 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log(res); //3
  return res;
}

lowerBound(n, target, arr);

// Upper bound gives the highest of the output. - output will be -> start
function UpperBound(n, target, arr) {
  let start = 0;
  let end = arr.length - 1;
  
  let mid = start + Math.floor((end - start) / 2);
  while (start <= end) {
    if (target === arr[mid]) {
      start = mid + 1;
      
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log(start);
  return start;
}
UpperBound(n, target, arr);
