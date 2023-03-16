function countSheeps(arrayOfSheep) {
    if (!Array.isArray(arrayOfSheep)) {
      return 0; // Return 0 for non-array inputs
    }
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        count++;
      }
    }
    return count;
  }