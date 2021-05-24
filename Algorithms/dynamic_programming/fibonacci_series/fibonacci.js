module.exports = num => {
	const preCalculated = [];
	preCalculated[0] = 0;
	preCalculated[1] = 1;
	if (num < 2) {
		return preCalculated[num];
	}
	for (let i = 2; i <= num; i++)
		preCalculated[i] = preCalculated[i - 1] + preCalculated[i - 2];
	return preCalculated[num];
};
