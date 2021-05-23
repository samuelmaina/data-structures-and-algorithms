const binarySearch = require('./binarySearch');

const TRIALS = 2000000;
describe('Binary Search', () => {
	it('should throw on empty array', () => {
		expect(() => {
			binarySearch([], 1);
		}).toThrow();
	});
	describe('Searching', () => {
		describe('Numeric search', () => {
			let array = [];

			beforeAll(() => {
				for (let i = 0; i < TRIALS; i++) {
					array.push(i);
				}
			});
			runFindTests(array);
			//the value of TRIAL will not be in the array.
			//since we are creating values for index 0
			//to TRiAL -1
			runUnfoundTest(array, TRIALS);
		});
		describe('String search', () => {
			const array = [
				'a',
				'b',
				'c',
				'd',
				'e',
				'f',
				'g',
				'i',
				'j',
				'k',
				'l',
				'm',
				'n',
				'o',
			];
			runFindTests(array);
			runUnfoundTest(array, 'p');
		});
	});
	describe('Volume', () => {
		const large = 5e7;
		let array = [];

		beforeAll(() => {
			for (let i = 0; i < large; i++) {
				array.push(i);
			}
		});
		runFindTests(array);

		runUnfoundTest(array, large);
	});
});

function runFindTests(array) {
	it('returns index when key is present', () => {
		const arrLength = array.length;
		const firstIndex = 0;
		const lastIndex = arrLength - 1;
		const middleIndex = Math.floor(firstIndex + (lastIndex - firstIndex) / 2);
		let firstElement = array[firstIndex];
		let lastElement = array[lastIndex];
		let middleElement = array[middleIndex];

		expect(binarySearch(array, firstElement)).toBe(firstIndex);
		expect(binarySearch(array, middleElement)).toBe(middleIndex);
		expect(binarySearch(array, lastElement)).toBe(lastIndex);
	});
}
function runUnfoundTest(array, key) {
	const unfound = -1;
	it('should return -1 when the value is not in the array.', () => {
		expect(binarySearch(array, key)).toBe(unfound);
	});
}
