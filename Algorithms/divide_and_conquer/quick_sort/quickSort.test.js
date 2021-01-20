const quickSort = require("./quickSort");
const {sortTest} = require("../../testUtils");

describe("QuickSort", () => {
  sortTest(quickSort);
});
