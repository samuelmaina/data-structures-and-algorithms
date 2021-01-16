const mergeSort = require("./mergeSort");

const {sortTest} = require("../utils");
describe.skip("MergeSort", () => {
  sortTest(mergeSort);
});
