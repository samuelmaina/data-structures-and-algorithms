//time complexity O(nlg(n))

function mergeSort(array, comparer) {
	return mergeSortHelper(array);

	function mergeSortHelper(array) {
		const arrayLength = array.length;
		//contains only one element
		//so no need to mergesort.
		if (arrayLength < 2) {
			return array;
		}

		let midpoint = Math.floor(arrayLength / 2),
			leftArray = array.slice(0, midpoint),
			rightArray = array.slice(midpoint);

		return mergeArrays(mergeSortHelper(leftArray), mergeSortHelper(rightArray));
	}
	function mergeArrays(left, right) {
		let mergeArray = [];

		while (left.length && right.length) {
			if (comparer(left[0], right[0])) {
				//left index element meets the sort
				//condition, so we push it to the
				//mergeArray.
				//shifts removed an element from the start of the array and then
				//returns the modified array.
				mergeArray.push(left.shift());
			} else {
				mergeArray.push(right.shift());
			}
		}
		addRemainingToMergeArray(left);
		addRemainingToMergeArray(right);

		function addRemainingToMergeArray(array) {
			mergeArray = mergeArray.concat(array);
		}
		return mergeArray;
	}
}

module.exports = mergeSort;
