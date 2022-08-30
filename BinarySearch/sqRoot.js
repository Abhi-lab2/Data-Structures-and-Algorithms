// Question Link: https://pdfhost.io/v/sY2qXKi8S_Square_root_of_an_Integer.pdf
let a = 25;

function sqRoot(a) {
  if (a < 1) {
    return 0;
  }
  var start = 1;
  var end = a;
  var res = -1;
  while (start <= end) {
    var mid = parseInt(start + (end - start) / 2);
    var sq = a / mid;
    if (mid <= sq) {
      res = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(res);
  return;
}

sqRoot(a); // 5
