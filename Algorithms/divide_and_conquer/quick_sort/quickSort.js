function quickSort(array, comparer) {
  const start = 0;
  const end = array.length - 1;
  quickSortHelper(array, start, end);
  //return the modified version of array.
  return array;

  function quickSortHelper(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
      return;
    }

    // Returns pivotIndex
    let index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays
    quickSortHelper(arr, start, index - 1);
    quickSortHelper(arr, index + 1, end);
  }

  function partition(arr, start, end) {
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (comparer(arr[i], pivotValue)) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
  }
}

module.exports = quickSort;
