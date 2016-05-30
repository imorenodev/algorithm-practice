var fs = require('fs');
var testQueries = fs.readFileSync('robot-queries.txt').toString();

function processData(input) {
  //Enter your code here
  var hash = {},
      r1 = null,
      r2 = null,
      last = null;
  var inputArr = input.split('\n').map(function(arr) {
    return arr.split(' ').map(function(num) {
      return parseInt(num, 0);
    });
  });
  // create new keys in hash for every test
  for (var i = 0, j = 1; i < inputArr[0]; i++, j = inputArr[j][1] + 2) {
    hash['test' + i] = {
      numContainers: inputArr[j][0],
      numQueries: inputArr[j][1],
      queries: inputArr.slice(j + 1, j + 1 + inputArr[j][1])
    }
  }
  console.log(hash);
  Object.keys(hash).forEach(function(test) {
    console.log(hash[test].queries.reduce(function(acc, curr) {
      if (last === null || last === 'r2') {
	if (r1 !== null) {
	  acc += Math.abs(r1 - curr[0]) + Math.abs(curr[0] - curr[1]);
	} else {
	  acc += Math.abs(curr[0] - curr[1]);
	}
	last = 'r1';
	r1 = curr[1];
	hash[test].numQueries--;
      } else {
	if (r2 !== null) {
	  acc += Math.abs(r2 - curr[0]) + Math.abs(curr[0] - curr[1]);
	} else {
	  acc += Math.abs(curr[0] - curr[1]);
	}
	last = 'r2';
	r2 = curr[1];
	hash[test].numQueries--;
      }
      if (hash[test].numQueries === 0) {
	r1 = null;
	r2 = null;
      }
      return acc;
    }, 0));
  });
} 

processData(testQueries);
