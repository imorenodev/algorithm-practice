var binarySearch = function(arr, target) {
  var max = arr.length-1,
      min = 0,
      count = 1;
  
  var findTarget = function(nextGuess) {
    count++;
  	//base case
	  if (arr[nextGuess] === target) {
      return nextGuess;
    }
	  if (max < min) {
      return -1;
    }
	  if (arr[nextGuess] > target) max = nextGuess - 1;
	  if (arr[nextGuess] < target) min = nextGuess + 1; 

	  return findTarget(Math.floor((max + min) / 2));
	};
	return {
    findTarget: findTarget(),
    getCount: count
  };
};

var findNum = binarySearch([1,2,3,4,5,6,7,8,9,10], 10);
console.log("The target was " + 
	         (findNum.findTarget > -1 ? 
	           "found at index " + findNum.findTarget : 
	           "not found") + 
	           " after " + findNum.getCount + " guesses.");