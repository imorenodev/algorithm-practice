// Given a triangle of numbers, sum the adjacent numbers from top-to-bottom
// to find the maximum possible sum.
var fs = require('fs');
var lastIndex = 0;

// load and parse local triangle.txt file and convert contents to String values
// so we can create an array of rows by 'split'ting on the \n character
// Index each number in its corresponding row array
// Convert strings to numbers and filter NaN values
var triangleArr = fs.readFileSync('triangle.txt')
  .toString()
  .split("\n")
  .reduce((acc, curr) => {
    acc.push(curr.split(' ')
      .map(arr => parseInt(arr, 0))
      .filter(arr => !isNaN(arr)));
    return acc;
  },[]);

// First, check for NaN array edge case and return acc unchanged
// Otherwise we reduce the array one row at a time.
// Find largest adjacent number, add to accumulator and set currentIndex
var triangleSum = triangleArr.reduce((acc, curr) => {
  if (isNaN(curr[lastIndex]) || isNaN(curr[lastIndex + 1])) {
    return acc;
  }

  if (curr[lastIndex] >= curr[lastIndex + 1]) {
    acc += parseInt(curr[lastIndex], 0);
  } else {
    acc += parseInt(curr[lastIndex + 1], 0);
    lastIndex++;
  }

  return acc;
},parseInt(triangleArr[0]));

console.log(`The maximum sum is: ${triangleSum}`); // 665321 
