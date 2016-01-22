describe('solvers', function() {
  window.displayBoard = function() {};

  // describe('countNQueensSolutions()', function() {

  //   it('finds the number of valid solutions for n of 0-8', function() {
  //     _.range(0, 10).map(function(n) {
  //       var solutionCount = countNQueensSolutions(n);
  //       var expectedSolutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680][n];

  //       expect(solutionCount).to.be.equal(expectedSolutionCount);
  //     });
  //   });

  // });



  // describe('oldCountNQueensSolutions()', function() {

  //   it('finds the number of valid solutions for n of 0-8', function() {
  //     _.range(0, 10).map(function(n) {
  //       var solutionCount = oldCountNQueensSolutions(n);
  //       var expectedSolutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680][n];

  //       expect(solutionCount).to.be.equal(expectedSolutionCount);
  //     });
  //   });

  // });

  describe('time complexity estimate of n queens solutions', function() {
    it('finds the execution time for 0 through 10 queens using countNQueensSolutions()', function() {
      var executionTimes = [];
      for (var n = 0; n < 14; n++) {
        var start = new Date().getTime();
        countNQueensSolutions(n);
        var end = new Date().getTime();
        var elapsed = end - start;
        executionTimes.push(elapsed);
      }
      console.log(executionTimes);
    });    
    it('finds the execution time for 0 through 10 queens using oldCountNQueensSolutions', function() {
      var executionTimes = [];
      for (var n = 0; n < 12; n++) {
        var start = new Date().getTime();
        oldCountNQueensSolutions(n);
        var end = new Date().getTime();
        var elapsed = end - start;
        executionTimes.push(elapsed);
      }
      console.log(executionTimes);
    });
  });



});
