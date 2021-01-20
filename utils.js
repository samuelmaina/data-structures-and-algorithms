exports.ensureArrayNotEmpty = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error("The input is not a valid array.");
  }
  if (arr.length < 1) {
    throw new Error("Array is empty!!!");
  }
};

exports.calculateMidpoint = (low, high) => {
  if (!(typeof low === "number" && typeof high === "number")) {
    throw new Error("The two passed values must be numbers.");
  }
  return Math.floor(low + (high - low) / 2);
};
