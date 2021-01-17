exports.sortTest = func => {
  describe("numerical sorting", () => {
    let nonRepeating = [10, 99, 45, 22, 23, 25];
    let repeating = [12, 30, 4, 78, 44, 12, 44];
    runTests(nonRepeating, repeating);
  });

  describe("string sorting", () => {
    let nonRepeating = ["s9", "s2", "s4", "s1", "s20", "s3"];
    let repeating = ["s1", "s2", "s4", "s1", "s20", "s2"];
    runTests(nonRepeating, repeating);
  });
  function runTests(nonRepeating, repeating) {
    describe("ascending", () => {
      const ascendingOrder = (a, b) => {
        return a < b;
      };
      it("should sort for  non repeating elements ", () => {
        const sorted = func(nonRepeating, ascendingOrder);
        ensureSortedInAscendingOrder(sorted);
      });
      it("should sort for  repeating elements", () => {
        const sorted = func(repeating, ascendingOrder);
        ensureSortedInAscendingOrder(sorted);
      });
    });
    describe("descending", () => {
      const descendingOrder = (a, b) => {
        return a > b;
      };
      it("should sort for  non repeating elements ", () => {
        const sorted = func(nonRepeating, descendingOrder);
        ensureSortedInDescendingOrder(sorted);
      });
      it("should sort for  repeating elements", () => {
        const sorted = func(repeating, descendingOrder);
        ensureSortedInDescendingOrder(sorted);
      });
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
    return a => b;
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
        throw new Error("Array not sorted in ascending order.");
      }
    }
    function hasNextElem() {
      return index + 1 < arrayLen;
    }
  }
}
