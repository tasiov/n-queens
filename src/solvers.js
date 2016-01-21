/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        row[j] = 1;
      } else {
        row[j] = 0;
      }
    }
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  return _.range(1,n+1).reduce(function(a,b) { return a * b; });
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var board = new Board({'n': n});
  var placePiece = function(row) {

    if (row === n) {
      solution = board.rows();
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        placePiece(row + 1);

      }
      if (solution) {
        return;
      }
      board.togglePiece(row, i);
    }
  };
  placePiece(0);
  solution = solution || board.rows();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({'n':n});
  var recursiveCalls = 0;

  var getArrayIndex = function(i, j) {
    return n * i + j;
  }; // O(1)

  var options = {};
  options.length = n * n;
  for (var i = 0; i < n*n; i++) {
    options[i] = null;
  } // O(n)

  var column = function(index) {
    return index % n;
  }; // O(1)

  var row = function(index) {
    return Math.floor(index / n);
  }; // O(1)

  var sameColumn = function(val1, val2) {
    return column(val1) === column(val2);
  }; // O(1)

  var sameRow = function(val1, val2) {
    return row(val1) === row(val2);
  }; // O(1)

  var sameDiag = function(val1, val2) {
    return Math.abs((row(val1) - row(val2)) / (column(val1) - column(val2))) === 1;
  }; // O(1)

  var eliminateCells = function(index) {
    var deleted = {};
    for (var opt in options) {
      if (sameColumn(opt, index) || sameRow(opt, index) || sameDiag(opt, index)) {
        deleted[opt] = options[opt];
        delete options[opt];
        options.length--;
      }
    }
    return deleted;
  };

  var placeQueen = function(callNum) {
    recursiveCalls++;
    // if (n === 4) {
    //   debugger;
    // }
    if (callNum === n) {
      solutionCount++;
      return;
    }
    if (options.length === 0) {
      return;
    }
    for (var index in options) {
      if (n * callNum <= index && index < n*(callNum + 1)) {
        var oldLength = options.length;
        var removedCells = eliminateCells(index);
        placeQueen(callNum + 1);
        _.extend(options, removedCells);
        options.length = oldLength;
      }
    }
  };
  placeQueen(0);
  console.log(recursiveCalls);
  return solutionCount;
};





