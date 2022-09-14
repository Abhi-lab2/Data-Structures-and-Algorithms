const input = [3, 1, 5, 8, 9, 5, 2, 6, 3, 6, 1];

function removeDuplicate(arr) {
  const result = [];
  let idx = 0;
  const tmp = {};

  for (let i = 0; i < arr.length; i++) {
    if (!tmp[arr[i]]) {
      tmp[arr[i]] = 1;
      result[idx] = arr[i];
      idx++;
    }
  }
  return result;
}

console.log(removeDuplicate(input));
