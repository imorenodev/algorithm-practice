function diff(hash, arr) {
  var diffHash= {};

  for (var i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]] += 2;
    }
  }

  console.log(hash);
  return diffHash;
}

function sym(args) {
  var args = [].slice.apply(arguments);
  var symHash = {};
  for (var i = 0; i < args.length; i++) {
    symHash = diff(symHash, args[i]);
  }
}
sym([1, 2, 3], [5, 2, 1, 4], [2, 5, 6]);
