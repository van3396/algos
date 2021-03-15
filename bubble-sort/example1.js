const chalk = require("chalk");

const color = chalk.magenta;
/*
[2, 1, 3, 5]
   1.  - point to two consecutive items in the array.
        (initially, we start at the beginning of the array and point to its first two items)
        - compare the first item with the second one:
    [2, 1]

    2.  - if the two items are out of order (the left value is greater than the right value), swap them
        (if they already happen to be in the correct order, do nothing for this step)
    [1, 2] --> [1, 2, 3, 5]

    3.  - move the "pointers" one cell to the right:
    [1, 2, 3, 5]
        - repeat steps 1 and 2 until we reach the end of the array or any items that have already been sorted
    
    4.  - repeat steps 1 through 3 until we have a round in which we didn't have to make any steps.  This means that the array is in order

*/

const bubbleSort = (array) => {
  let unsortUntilIndex = array.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsortUntilIndex; i++) {
      let el = unsortUntilIndex[i];
      let nextEl = unsortUntilIndex[i + 1];
      let current = el;
      if (el > nextEl) {
        sorted = false;
        el = nextEl;
        nextEl = current;
        unsortUntilIndex = unsortUntilIndex - 1;
      }
    }
  }
  return array;
};

const test = [3, 2];

console.log(bubbleSort(test));
