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

	for (let i = 0; i < rows; i++) {
		min = Math.min(i, r);
		let iMinus1 = i - 1;
		for (let j = 0; j <= min; j++)
			if (j === 0 || j === i) nCr[i][j] = 1;
			else {
				nCr[i][j] = nCr[iMinus1][j - 1] + nCr[iMinus1][j];
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
