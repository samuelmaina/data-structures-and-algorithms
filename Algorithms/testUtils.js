exports.sortTest = (func) => {
  describe("Invalid Inputs", () => {
    it("undefined", () => {
      expect(func(undefined)).toBeUndefined();
    });
    it("null", () => {
      expect(func(null)).toBeNull();
    });
  });
  describe("Edge case", () => {
    it("an empty array ", () => {
      expect(func([])).toStrictEqual([]);
    });
  });
  describe("numerical sorting", () => {
    it("when array has 1 element", () => {
      expect(func([1])).toStrictEqual([1]);
    });

    describe("when array has 2 element", () => {
      runTests([2, 1]);
    });
    let nonRepeating = [10, 99, 45, 22, 23, 25];
    let repeating = [12, 30, 4, 78, 44, 12, 44];
    runTests(nonRepeating, repeating);
  });

  describe("string sorting", () => {
    it("when array has 1 element", () => {
      expect(func("a")).toBe("a");
    });

    describe("when array has 2 element", () => {
      it("should run when we have only 2 elem", () => {
        expect(func("ba", (a, b) => a < b)).toStrictEqual("ab");
      });
    });
    let nonRepeating = "azyxAb";
    let repeating = "bcdefbA";
    runTests(nonRepeating, repeating);
  });

  function runTests(nonRepeating, repeating = []) {
    describe("ascending", () => {
      const ascendingOrder = (a, b) => {
        return a < b;
      };
      runner(
        ascendingOrder,
        nonRepeating,
        repeating,
        ensureSortedInAscendingOrder
      );
    });
    describe("descending", () => {
      const descendingOrder = (a, b) => {
        return a > b;
      };
      runner(
        descendingOrder,
        nonRepeating,
        repeating,
        ensureSortedInDescendingOrder
      );
    });
  }
  function runner(orderFunc, nonRepeating, repeating, validatingFunc) {
    it("should sort for  non repeating elements ", () => {
      const sorted = func(nonRepeating, orderFunc);
      validatingFunc(sorted);
    });
    it("should sort for  repeating elements", () => {
      const sorted = func(repeating, orderFunc);
      validatingFunc(sorted);
    });
  }
};

function ensureSortedInAscendingOrder(array) {
  const comparer = (a, b) => {
    return a <= b;
  };
  validate(array, comparer);
}

function ensureSortedInDescendingOrder(array) {
  const comparer = (a, b) => {
    return a >= b;
  };
  validate(array, comparer);
}
function validate(array, comparer) {
  const arrayLen = array.length;

  for (let index = 0; index < arrayLen; index++) {
    if (hasNextElem()) {
      const elem = array[index];
      const nextElem = array[index + 1];
      if (!comparer(elem, nextElem)) {
        console.log(array, elem, nextElem);
        throw new Error("Array not sorted in the required order.");
      }
    }
    function hasNextElem() {
      return index + 1 < arrayLen;
    }
  }
}
