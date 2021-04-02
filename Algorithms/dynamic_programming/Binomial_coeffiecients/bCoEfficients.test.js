const coefficient = require('./bCoEfficients');

describe('-Binomial Coeffiencts', () => {
	it('should return 1 when both values are 0', () => {
		expect(coefficient(0, 0)).toBe(1);
	});
	it('should return 1 when both values are the same', () => {
		expect(coefficient(2, 2)).toBe(1);
		expect(coefficient(10, 10)).toBe(1);
	});
	it('should return 1 when column is 0', () => {
		expect(coefficient(2, 0)).toBe(1);
		expect(coefficient(10, 0)).toBe(1);
	});
	it('should return n when column is 1', () => {
		expect(coefficient(2, 1)).toBe(2);
		expect(coefficient(10, 1)).toBe(10);
	});
	it('should return for large values', () => {
		let n = 60,
			r = 30,
			expected = 1.1826458156486142e17;
		expect(coefficient(n, r)).toBe(expected);
		n = 100;
		r = 50;
		expected = 1.0089134454556424e29;
		expect(coefficient(n, r)).toBe(expected);
	});
});
