// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

const separateString = userInputString.split(",")

console.log(separateString)

const everyInstance = separateString.filter((str, idx, arr) => arr.indexOf(str) == idx)

console.log(everyInstance)

// Create an object without duplicates


//Adds 1 for every instance
const addEveryInstance = ((arr) => {
  let output = {};
  separateString.forEach(item => {
    output[item] = 0;
  });

  for (const item in arr) {
    output[arr[item]]++
  }
  return output
})

output = addEveryInstance(separateString);

console.log(output);