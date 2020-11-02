// Disabling some eslint to stick to provided solution at
// https://stackoverflow.com/questions/9960908/permutations-in-javascript/37580979#37580979
/* eslint-disable no-param-reassign,no-plusplus */
export const permute = (array) => {
  const { length } = array;
  const result = [array.slice()];
  const c = new Array(length).fill(0);
  let i = 1;
  let k;
  let p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = array[i];
      array[i] = array[k];
      array[k] = p;
      ++c[i];
      i = 1;
      result.push(array.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
};
