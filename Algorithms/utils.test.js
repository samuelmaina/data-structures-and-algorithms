const {calculateMidpoint} = require("./utils");
describe.skip("util tests", () => {
  describe("calculateMidpoint", () => {
    it("rejects values that are non-numeric", () => {
      const low = "test";
      expect(() => {
        calculateMidpoint(low, 1);
      }).toThrow();
    });
    it("returns the midpoint of small values", () => {
      const low = 1,
        high = 11;
      const expectedMid = 6;
      const mid = calculateMidpoint(low, high);
      expect(mid).toBe(expectedMid);
    });
    it("returns the midpoint of very huge values.", () => {
      const low = 13.7788e10,
        high = 13.7788e10;
      const expectedMid = 13.7788e10;
      const mid = calculateMidpoint(low, high);
      expect(mid).toBe(expectedMid);
    });
  });
});
