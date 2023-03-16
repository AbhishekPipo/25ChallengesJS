function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((sum, num) => sum + num, 0) + arr2.reduce((sum, num) => sum + num, 0);
  }