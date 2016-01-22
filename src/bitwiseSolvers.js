window.countNRooksSolutions = function(n) {
  var solutions = 0;
  var allOnes = Math.pow(2, n) - 1;

  var recurse = function(col) {

    if (col === allOnes) {
      solutions++;
      return;
    }

    var possible = ~col;
    while (possible & allOnes) {
      var bit = possible & -possible;
      possible = possible - bit;
      recurse(col | bit);
    }

  };

  recurse(0);
  return solutions;
};


window.countNQueensSolutions = function(n) {
  // debugger;
  var solutions = 0;
  var allOnes = Math.pow(2, n) - 1;
  var recurse = function(minor, col, major) {

    if (col === allOnes) {
      solutions++;
      return;
    }

    var possible = ~(col | major | minor);
    while (possible & allOnes) {
      var bit = possible & -possible;
      possible = possible - bit;
      recurse((minor | bit) << 1, col | bit, (major | bit) >> 1);
    }

  };

  recurse(0, 0, 0);
  return solutions;
};