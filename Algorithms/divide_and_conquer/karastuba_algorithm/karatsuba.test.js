const karatsuba = require("./karatsuba");

describe("--Karatsuba algorithm", () => {
  describe.skip("base 10", () => {
    describe("single digit numbers", () => {
      it("should multipley 0 and 0", () => {
        runBase10Tests(0, 0, 0);
      });
      it("should multipley 9 and 9", () => {
        runBase10Tests(9, 9, 81);
      });
    });
    describe("number with atleast two digits", () => {
      it("multiplies numbers with same number of digits", () => {
        let int = 10;
        runBase10Tests(int, int, int * int);
        int = 43584938489384938;
        runBase10Tests(int, int, int * int);
      });
      it("multiplies numbers with unequal number of digits", () => {
        let int = 10;
        let int2 = 101;
        runBase10Tests(int, int2, int * int2);
        int = 10;
        int2 = 1099998899;
        runBase10Tests(int, int2, int * int2);
      });
    });
  });
  describe("base 8", () => {
    describe("single digit numbers", () => {
      it.skip("should multipley 0 and 0", () => {
        runBase8Tests(0, 0);
      });
      it("should multipley 7 and 7", () => {
        runBase8Tests(10, 10);
      });
    });
    describe.skip("number with atleast two digits", () => {
      it("multiplies numbers with same number of digits", () => {
        let int = 77;
        runBase8Tests(int, int);
        // int = 6434753654365346;
        // runBase8Tests(int, int, int * int);
      });
      it.skip("multiplies numbers with unequal number of digits", () => {
        let int = 10;
        let int2 = 101;
        runBase8Tests(int, int2, int * int2);
        int = 10;
        int2 = 1099998899;
        runBase8Tests(int, int2, int * int2);
      });
    });
  });
});

function runBase10Tests(int1, int2) {
  const base = 10;
  const expected = int1 * int2;
  expect(karatsuba(base, int1, int2)).toBe(expected);
}
function runBase8Tests(int1, int2) {
  const base = 8;
  const expected = multiplyNumbersWithBase(int1, int2, base);
  expect(karatsuba(base, int1, int2)).toBe(expected);
}

function multiplyNumbersWithBase(num1, num2, base) {
  const v1 = convertFromBase1ToBase2(num1, base, 10);
  const v2 = convertFromBase1ToBase2(num2, base, 10);
  return convertFromBase1ToBase2(v1 * v2, 10, base);
}
function convertFromBase1ToBase2(num, fromBase, toBase) {
  const decimal = parseInt(num, fromBase).toString(toBase);
  return Number(decimal);
}
