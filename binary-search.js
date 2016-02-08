function binarySearch(arr, target) {
  var max = arr.length-1,
      min = 0,
      guess = Math.floor((max + min) / 2),
      count = 1;
  
  function findTarget(nextGuess) {
    count++;
  	//base case
	  if (arr[nextGuess] === target) {
      console.log("Target found at index " + nextGuess + " after " + count + " guesses.");
      return nextGuess;
    }
	  if (max < min) {
      console.log("target not present in array");
      return -1;
    }
	  if (arr[nextGuess] > target) max = nextGuess - 1;
	  if (arr[nextGuess] < target) min = nextGuess + 1; 

	  findTarget(Math.floor((max + min) / 2));
	}
	return findTarget(guess);
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 6);