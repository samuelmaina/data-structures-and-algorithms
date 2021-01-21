module.exports = (base, int1, int2) => {
  return karatsubaHelper(int1, int2);
  function karatsubaHelper(int1, int2) {
    //if any of the numbers can not be split(i.e is a one digit number)
    //we do the normal multiplication.
    if (int1 < base || int2 < base) {
      return multiply(int1, int2);
    }

    const max = Math.max(noOfDigitsIn(int1), noOfDigitsIn(int2));

    const dividerPower = integerDivision(max, 2);

    const [a, b] = split(int1, dividerPower);
    const [c, d] = split(int2, dividerPower);

    const ac = karatsubaHelper(a, c);
    const bd = karatsubaHelper(b, d);
    const r = karatsubaHelper(a + b, c + d);

    const result =
      ac * power(base, 2 * dividerPower) +
      (r - ac - bd) * power(base, dividerPower) +
      bd;
    return convertFromBase1ToBase2(result, 10, base);
  }
  function split(number, dividerPower) {
    const noOfDigits = noOfDigitsIn(number);

    //reject if the number is not finite or it has one digit
    if (!isFinite(number) || noOfDigits < 2) {
      throw Error(`Cannot split number = ${number}`);
    }
    const divider = power(base, dividerPower);

    const num1 = integerDivision(number, divider);
    const num2 = modulo(number, divider);
    console.log(num1, num2);
    return [num1, num2];
  }

  function multiply(num1, num2) {
    const v1 = convertFromBase1ToBase2(num1, base, 10);
    const v2 = convertFromBase1ToBase2(num2, base, 10);
    return convertFromBase1ToBase2(v1 * v2, 10, base);
  }
  function integerDivision(number, divisor) {
    const v1 = convertFromBase1ToBase2(number, base, 10);

    const inter = convertFromBase1ToBase2(v1 / divisor, 10, base);
    const result = Math.floor(inter);
    return result;
  }
  function modulo(number, divisor) {
    const v1 = convertFromBase1ToBase2(number, base, 10);
    return convertFromBase1ToBase2(v1 % divisor, 10, base);
  }
};

function noOfDigitsIn(int) {
  return int.toString().length;
}

function convertFromBase1ToBase2(num, fromBase, toBase) {
  const decimal = parseInt(num, fromBase).toString(toBase);
  return Number(decimal);
}
function power(base, pow) {
  return Math.pow(base, pow);
}
