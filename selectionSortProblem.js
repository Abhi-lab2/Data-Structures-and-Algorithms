// Q https://pdfhost.io/v/Ya~T8it4R_Selection_Sort_Problempdf.pdf

function selectionSort(array) {
    let count = 0;
    while (count < array.length) {
        let idx = count;
        let smallNumber = array[count];
        for (let i = count; i < array.length; i++) {
            if (array[i] < smallNumber) {
                smallNumber = array[i];
                idx = i;
            }
        }
        //console.log(smallNumber, idx)
        let temp = array[count];
        array[count] = array[idx];
        array[idx] = temp;
        count++;
    }
    return array.join(" ");
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let array = newInput[1].trim().split(" ").map(Number);
    console.log(selectionSort(array));
}

let input = `6
3 5 0 9 8 1`;
runProgram(input);