//complexity O(nr)
function binomialCoefficients(n, r) {
	// the binomial coefficients are symetric.Incase calcutating
	//for columns right of the middle value(n/2), calculate the left symetric value
	// using nCr(n,r)=nCr(n,n-r).This is efficient as only  left columns  are calcualated.
	if (r > n / 2) return binomialCoefficientHelper(n, n - r);
	return binomialCoefficientHelper(n, r);
}

function binomialCoefficientHelper(n, r) {
	//the rows run from 0 to n hence n+1 rows
	const rows = n + 1;
	// same case as rows.
	const columns = r + 1;
	if (n < 1) return 1;
	const nCr = create2DArray(rows, columns);
	let min;

	for (let row = 0; row < rows; row++) {
		min = Math.min(row, r);
		let rowMinus1 = row - 1;
		let isFirstOrLastColumn;
		for (let column = 0; column <= min; column++) {
			isFirstOrLastColumn = column === 0 || column === row;
			//for both the first and the last column ,the value should be 1
			if (isFirstOrLastColumn) nCr[row][column] = 1;
			else {
				nCr[row][column] = nCr[rowMinus1][column - 1] + nCr[rowMinus1][column];
			}
		}
	}

	return nCr[n][r];
}

function create2DArray(rows, columns) {
	let x = new Array(rows);
	for (let i = 0; i < rows; i++) {
		x[i] = new Array(columns);
	}
	return x;
}

module.exports = binomialCoefficients;
