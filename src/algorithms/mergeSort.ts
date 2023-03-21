import { ANIMATION_ACTION } from "@/utils/constants";
import type { Bar, Animations } from "@/utils/types";

const mergeSort = (collection: Bar[]) => {
  // a collection to hold a list of all of the animations
  const animations: Animations = [];
  collection = [...collection];
  // if collection is 1 index or fewer, it's sorted
  if (collection.length <= 1) return animations;
  // create a copy of collection
  let collCopy = [...collection];
  // splits and swaps the arrays, also creates midIdx pointer
  mergeSortHelper(collection, 0, collection.length - 1, collCopy, animations);
  // returns collection of animations
  return animations;
};

function mergeSortHelper(
  collection: Bar[],
  startIdx: number,
  endIdx: number,
  collCopy: Bar[],
  animations: Animations
) {
  // if startIdx equals endIdx, return
  if (startIdx === endIdx) return;
  // find the middle index
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  // swap the arrays, passing in midIdx to split them
  mergeSortHelper(collCopy, startIdx, midIdx, collection, animations);
  mergeSortHelper(collCopy, midIdx + 1, endIdx, collection, animations);
  // swap arrays back and merge them passing in all pointers
  mergeArrays(collection, startIdx, midIdx, endIdx, collCopy, animations);
}

function mergeArrays(
  collection: Bar[],
  startIdx: number,
  midIdx: number,
  endIdx: number,
  collCopy: Bar[],
  animations: Animations
) {
  // beginning of left portion of collection
  let i = startIdx;
  // beginning of right portion of collection
  let j = midIdx + 1;
  // index to overwrite in main collection
  let k = startIdx;
  // iterate over left and right side of collCopy, comparing values
  while (i <= midIdx && j <= endIdx) {
    // light these up to show that we are comparing these two indexes
    animations.push({ action: ANIMATION_ACTION.COMPARE, idx1: i, idx2: j });
    // if index in left side < index on right side
    if (collCopy[i].value < collCopy[j].value) {
      // light these up to show that it is in its final position
      animations.push({
        idx1: k,
        value: collCopy[i].value,
        action: ANIMATION_ACTION.OVERWRITE,
      });
      collection[k++] = collCopy[i++];
    } else {
      // light these up to show that it is in its final position
      animations.push({
        idx1: k,
        value: collCopy[j].value,
        action: ANIMATION_ACTION.OVERWRITE,
      });
      collection[k++] = collCopy[j++];
    }
  }
  // if there are values remaining, overwrite collection with them
  while (i <= midIdx) {
    // light these up to show that they are in their final position
    animations.push({
      idx1: k,
      value: collCopy[i].value,
      action: ANIMATION_ACTION.OVERWRITE,
    });
    collection[k++] = collCopy[i++];
  }
  while (j <= endIdx) {
    // light these up to show that they are in their final position
    animations.push({
      idx1: k,
      value: collCopy[j].value,
      action: ANIMATION_ACTION.OVERWRITE,
    });
    collection[k++] = collCopy[j++];
  }
}

export default mergeSort;
