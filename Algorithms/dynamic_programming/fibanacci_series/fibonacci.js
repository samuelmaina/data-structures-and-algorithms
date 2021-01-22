module.exports = num => {
  const precalculated = [];
  precalculated[0] = 0;
  precalculated[1] = 1;
  if (num < 2) {
    return precalculated[num];
  }
  for (let i = 2; i <= num; i++)
    precalculated[i] = precalculated[i - 1] + precalculated[i - 2];
  return precalculated[num];
};
