// Small arrays can use indexOf but for the large arrays it would be better to use binary search

function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      // if you don't need to get the first one - uncomment this
      // return middle

      //if you need to get the first one
      return getTheFirstNumber(sortedArray, middle, key);
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}

function getTheFirstNumber(sortedArray, index, key) {
  // search searching to the left untill find the first
  while (sortedArray[index - 1] === key) {
    index--;
  }

  return index;
}

module.exports = binarySearch;
