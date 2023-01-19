const quickSort = require("./quickSort");
const { sortTest } = require("../../testUtils");

describe.skip("QuickSort", () => {
  sortTest(quickSort);
});
