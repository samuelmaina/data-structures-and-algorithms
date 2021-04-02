const { calculateMidpoint } = require('../../../utils');

//time complexity O(lg(n))
function binarySearch(array, searchKey) {
	if (!(Array.isArray(array) && array.length > 0))
		throw new Error('value passed is not an array or it is empty.');
	let start = 0;
	let end = array.length - 1;
	let mid;
	let midValue;

	while (start <= end) {
		mid = calculateMidpoint(start, end);
		midValue = array[mid];
		if (searchKey === midValue) return mid;
		if (searchKey < midValue) end = mid - 1;
		if (searchKey > midValue) start = mid + 1;
	}
	return -1;
}

module.exports = binarySearch;
