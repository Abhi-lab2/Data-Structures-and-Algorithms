let input = "welcome to dsa course";

function reverseString(input) {
  var bag = "";
  for (var i = input.length - 1; i >= 0; i--) {
    bag += input[i];
  }
  return bag;
}

function reverseWords(input) {
  var word = "",
    output = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      output += reverseString(word) + " ";
      word = "";
    } else {
      word += input[i];
    }
  }
  return output + reverseString(word);
}

console.log(reverseString(input)); //-->  esruoc asd ot emoclew
