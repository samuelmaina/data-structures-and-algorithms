const {calculateMidpoint} = require("../../utils");

function quickSort(comparer) {
  const arrayLength = array.length;
  return quickSortHelper(array, 0, arrayLength - 1, comparer);
}

function quickSortHelper(array, left, right, comparer) {
  let index;
  const arrayLength = array.length;
  if (arrayLength > 1) {
    index = partition(array, left, right);
  }
  const indexMinus1 = index - 1;
  if (left < indexMinus1) {
    quickSortHelper(array, left, indexMinus1);
  }
  if (index < right) {
    quickSortHelper(array, index, right);
  }
  return array;
}
function partition(array, left, right) {
  const midpoint = calculateMidpoint(left, right);
  const pivot = array[midpoint];

  const leftElement = array[left];
  const rightElement = array[right];
  while (pivot > leftElement) {
    left++;
  }
  while (pivot < rightElement) {
    right--;
  }
  if (left <= right) {
    let temp = leftElement;
    leftElement = rightElement;
    rightElement = temp;
    left++;
    right--;
  }
}

module.exports = quickSort;
