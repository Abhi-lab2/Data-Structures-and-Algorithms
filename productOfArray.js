// This should not count the indexes of that current iteration and count and multiply the remaining onces.

let arr = [1, 2, 3, 4, 5];
// output -> [ 120, 60, 40, 30, 24 ]

function productOfArray(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    res.push(product);
  }
  console.log(res);
}

productOfArray(arr); 
