const fibonacci = require('./fibonacci');
describe.skip('Fibonacci Series', () => {
	describe('should return fibonacci(0) and fibonacci(1)', () => {
		it('0', () => {
			expect(fibonacci(0)).toBe(0);
		});
		it('1', () => {
			expect(fibonacci(1)).toBe(1);
		});
	});
	it('return for others', () => {
		expect(fibonacci(2)).toBe(1);
		expect(fibonacci(20)).toBe(6765);
		expect(fibonacci(60)).toBe(1548008755920);
	});
});
