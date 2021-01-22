module.exports = (base, int1, int2) => {
  const num1 = parseInt(int1, base);
  const num2 = parseInt(int2, base);
  //the algorithm will return the answert to base 10
  //hence need to convert it to the needed base.
  return convertBase(karatsubaHelper(num1, num2), 10, base);

  function karatsubaHelper(int1, int2) {
    const max = getMax(noOfDigitsIn(int1), noOfDigitsIn(int2));

    const threshhold = 2 * base;

    if (max <= 2 && getMax(int1, int2) <= threshhold) return int1 * int2;

    const dividerPower = integerDivision(max, 2);

    const [a, b] = split(int1, dividerPower);
    const [c, d] = split(int2, dividerPower);

    const ac = karatsubaHelper(a, c);
    const bd = karatsubaHelper(b, d);
    const r = karatsubaHelper(a + b, c + d);
    const adPlusBc = r - ac - bd;
    return (
      ac * power(base, 2 * dividerPower) +
      adPlusBc * power(base, dividerPower) +
      bd
    );
  }

  function split(number, dividerPower) {
    if (!isFinite(number)) {
      throw Error(`Cannot split number = ${number}`);
    }
    //if it is a single digit no need to perform division and modulo operations.
    if (number < base) return [0, number];

    const divider = power(base, dividerPower);
    const num1 = integerDivision(number, divider);
    const num2 = number % divider;
    return [num1, num2];
  }
};

function convertBase(num, fromBase, toBase) {
  return Number(parseInt(num, fromBase).toString(toBase));
}

function noOfDigitsIn(int) {
  return int.toString().length;
}
function getMax(a, b) {
  return Math.max(a, b);
}
function integerDivision(number, divisor) {
  return Math.floor(number / divisor);
}
function power(base, pow) {
  return Math.pow(base, pow);
}
