function findOutlier(integers){
    var numEvens = 0, numOdds = 0;
    var lastEven = 0, lastOdd = 0;
    
    for (var i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        numEvens++;
        lastEven = integers[i];
      } else {
        numOdds++;
        lastOdd = integers[i];
      }
      
      if (numEvens > 1 && numOdds === 1) {
        return lastOdd;
      } else if (numOdds > 1 && numEvens === 1) {
        return lastEven;
      }
    }
  }
  