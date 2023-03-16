function getAverage(marks){
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    
    var average = sum / marks.length;
  
    return Math.floor(average);
  }