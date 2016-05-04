function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  
  arr2.forEach(function(indx1) {
    var found = false;
    arr1.forEach(function(indx2) {
      if (indx1[1] == indx2[1]) {
        indx2[0] += indx1[0];
        found = true;
      }
    });
    if (!found) {
      arr1.push(indx1);
    }
  });
  return arr1.sort(function(a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
