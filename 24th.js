var maxSequence = function(arr){
    var maxSum = 0;
    var currentSum = 0;
  
    for (var i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      } else if (currentSum < 0) {
        currentSum = 0;
      }
    }
  
    return maxSum;
  }
  