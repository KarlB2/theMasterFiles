/***********
 * Problem 1
 * 
 * Get all names that start with 'A'
 **/

const names = ['Alice', 'Bob', 'Adam', 'Eve'];
const aNames = names.filter(currentName => currentName[0] == "A");

console.log(aNames);

/***********
 * Problem 2
 * 
 * Multiply all numbers by 2
 **/

const nums = [2, 4, 6, 8];
const timesTwo = nums.map(num => num * 2);

console.log(timesTwo);

/***********
 * Problem 3
 * 
 * Find the longest string in the array
 **/

const words = ['apple', 'banana', 'cherry', 'date'];
const findLongest = words.reduce((BiggestWord, currentWord) => currentWord.length > BiggestWord.length ? currentWord : BiggestWord, " ")

console.log(findLongest)

/***********
 * Problem 4
 * 
 * Identify the first even number in the array
 **/

const values = [1, 3, 5, 4, 2];
const findFirstEven = values.filter(num => num % 2 == 0)

console.log(findFirstEven)

/***********
 * Problem 5
 * 
 * Return an array containing all the unique numbers in the array
 **/

const numbers = [1, 2, 2, 3, 4, 4, 5];

