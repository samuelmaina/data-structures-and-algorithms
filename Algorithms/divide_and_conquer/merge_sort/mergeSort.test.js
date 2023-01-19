const mergeSort = require("./mergeSort");

const { sortTest } = require("../../testUtils");
describe.skip("MergeSort", () => {
  sortTest(mergeSort);
});
