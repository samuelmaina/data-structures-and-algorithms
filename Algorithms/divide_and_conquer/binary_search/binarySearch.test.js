const binarySearch = require("./binarySearch");

const TRIALS = 3;
describe("Binary Search", () => {
  it("should throw on empty array", () => {
    expect(() => {
      binarySearch([], 1);
    }).toThrow();
  });
  describe("Searching", () => {
    describe("Numeric search", () => {
      let array = [];
      const unfound = -1;
      beforeAll(() => {
        for (let i = 0; i < TRIALS; i++) {
          array.push(i);
        }
      });

      it("returns index when key is present", () => {
        const firstIndex = 0;
        const lastIndex = TRIALS - 1;
        const middleIndex = Math.floor(
          firstIndex + (lastIndex - firstIndex) / 2
        );
        let firstElement = array[firstIndex];
        let lastElement = array[lastIndex];
        let middleElement = array[middleIndex];

        expect(binarySearch(array, firstElement)).toBe(firstIndex);
        // expect(binarySearch(array, lastElement)).toBe(lastIndex);
        expect(binarySearch(array, middleElement)).toBe(middleIndex);
      });
      it("returns -1 when key is absent", () => {
        let searchKey = 2 * TRIALS;
        expect(binarySearch(array, searchKey)).toBe(unfound);
      });
    });
    describe("String search", () => {
      const unfound = -1;
      const array = [];
      beforeAll(() => {
        for (let i = 0; i < TRIALS; i++) {
          array.push(`s${i}`);
        }
      });

      it("returns index when key is present", () => {
        const firstIndex = 0;
        const lastIndex = TRIALS - 1;
        const middleIndex = Math.floor(
          firstIndex + (lastIndex - firstIndex) / 2
        );
        let firstElement = array[firstIndex];
        let lastElement = array[lastIndex];
        let middleElement = array[middleIndex];

        expect(binarySearch(array, firstElement)).toBe(firstIndex);
        expect(binarySearch(array, lastElement)).toBe(lastIndex);
        expect(binarySearch(array, middleElement)).toBe(middleIndex);
      });
      it("returns -1 when key is absent", () => {
        let searchKey = `s${2 * TRIALS}`;
        expect(binarySearch(array, searchKey)).toBe(unfound);
      });
    });
  });
});

// function searchTest(array) {
//   const unfound = -1;
//   const arrayLength = array.length;
//   it("returns index when key is present", () => {
//     const firstIndex = 0;
//     const lastIndex = arrayLength - 1;
//     const middleIndex = Math.floor(firstIndex + (lastIndex - firstIndex) / 2);
//     let firstElement = array[firstIndex];
//     let lastElement = array[lastIndex];
//     let middleElement = array[middleIndex];

//     expect(binarySearch(array, firstElement)).toBe(firstIndex);
//     expect(binarySearch(array, lastElement)).toBe(lastIndex);
//     expect(binarySearch(array, middleElement)).toBe(middleIndex);
//   });
//   it("returns -1 when key is absent", () => {
//     let searchKey = 2 * arrayLength;
//     expect(binarySearch(array, searchKey)).toBe(unfound);
//   });
// }
