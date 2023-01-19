const mergeSort = require("./mergeSort");

const { sortTest } = require("../../testUtils");
describe("MergeSort", () => {
  sortTest(mergeSort);
});
