//time complexity O(nlg(n))
//space complexity O(n)
function mergeSort(array, comparer) {
  let type = typeof array;

  if (type === "undefined" || array === null) {
    return array;
  }
  if (type === "string") {
    let result = mergeSortHelper(array);
    let resultString = "";
    for (let char of result) {
      resultString += char;
    }
    return resultString;
  }
  return mergeSortHelper(array);

  function mergeSortHelper(array) {
    const arrayLength = array.length;
    //contains only one element
    //so no need to mergesort.

    if (arrayLength <= 1) {
      return array;
    }

    let midpoint = Math.floor(arrayLength / 2),
      leftArray = array.slice(0, midpoint),
      rightArray = array.slice(midpoint);

    return mergeArrays(mergeSortHelper(leftArray), mergeSortHelper(rightArray));
  }
  function mergeArrays(left, right) {
    let mergeArray = [],
      leftLength = left.length,
      rightLength = right.length,
      leftIndex = 0,
      rightIndex = 0;

    while (leftIndex < leftLength && rightIndex < rightLength) {
      if (comparer(left[leftIndex], right[rightIndex])) {
        //left index element meets the sort
        //condition, so we push it to the
        //mergeArray.
        //shift removed an element from the start of the array and then
        //returns the modified array.
        mergeArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergeArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    addRemainingToMergeArray(left, leftIndex);
    addRemainingToMergeArray(right, rightIndex);

    function addRemainingToMergeArray(array, index) {
      length = array.length;
      while (index < length) {
        mergeArray.push(array[index]);
        index++;
      }
    }
    return mergeArray;
  }
}

module.exports = mergeSort;
