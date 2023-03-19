import type { Bar, Animation } from "@/utils/types";

const mergeSort = (array: Bar[]) => {
  // an array to hold a list of all of the animations
  const animations: Animation[] = [];
  array = [...array];
  // if array is 1 index or fewer, return
  if (array.length <= 1) return array;
  // create a copy of array
  let arrayCopy = [...array];
  // splits and swaps the arrays, also creates midIdx pointer
  mergeSortHelper(array, 0, array.length - 1, arrayCopy, animations);
  // returns array of animations
  return animations;
};

function mergeSortHelper(
  array: Bar[],
  startIdx: number,
  endIdx: number,
  arrayCopy: Bar[],
  animations: Animation[]
) {
  // if startIdx equals endIdx, return
  if (startIdx === endIdx) return;
  // find the middle index
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  // swap the arrays, passing in midIdx to split them
  mergeSortHelper(arrayCopy, startIdx, midIdx, array, animations);
  mergeSortHelper(arrayCopy, midIdx + 1, endIdx, array, animations);
  // swap arrays back and merge them passing in all pointers
  mergeArrays(array, startIdx, midIdx, endIdx, arrayCopy, animations);
}

function mergeArrays(
  array: Bar[],
  startIdx: number,
  midIdx: number,
  endIdx: number,
  arrayCopy: Bar[],
  animations: Animation[]
) {
  // beginning of left portion of array
  let i = startIdx;
  // beginning of right portion of array
  let j = midIdx + 1;
  // index to overwrite in main array
  let k = startIdx;
  // iterate over left and right side of arrayCopy, comparing values
  while (i <= midIdx && j <= endIdx) {
    // light these up to show that we are comparing these two indexes
    animations.push({ action: "compare", idx1: i, idx2: j });
    // if index in left side < index on right side
    if (arrayCopy[i].value < arrayCopy[j].value) {
      // light these up to show that it is in its final position
      animations.push({
        action: "overwrite",
        idx1: k,
        value: arrayCopy[i].value,
      });
      array[k++] = arrayCopy[i++];
    } else {
      // light these up to show that it is in its final position
      animations.push({
        action: "overwrite",
        idx1: k,
        value: arrayCopy[j].value,
      });
      array[k++] = arrayCopy[j++];
    }
  }
  // if there are values remaining, overwrite array with them
  while (i <= midIdx) {
    // light these up to show that they are in their final position
    animations.push({
      action: "overwrite",
      idx1: k,
      value: arrayCopy[i].value,
    });
    array[k++] = arrayCopy[i++];
  }
  while (j <= endIdx) {
    // light these up to show that they are in their final position
    animations.push({
      action: "overwrite",
      idx1: k,
      value: arrayCopy[j].value,
    });
    array[k++] = arrayCopy[j++];
  }
}

export default mergeSort;
