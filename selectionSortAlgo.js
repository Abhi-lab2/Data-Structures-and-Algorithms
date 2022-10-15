// Q https://pdfhost.io/v/Ya~T8it4R_Selection_Sort_Problempdf.pdf

var arr = [64, 25, 12, 22, 11];
var n = 5;

function selectionSort(arr, n) {
  for (let i = 0; i < n ; i++) {
    // Find the minimum element in unsorted array
    min_indx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_indx]) {
        min_indx = j;
      }
    }
    [arr[min_indx], arr[i]] = [arr[i], arr[min_indx]]; //swap
  }
  console.log(arr.join(" "));
}
selectionSort(arr, n);
