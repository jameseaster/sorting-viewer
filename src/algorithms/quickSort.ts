import type { Bar } from "@/utils/types";
import { COLORS } from "@/utils/constants";

const quickSort = async (
  collection: Bar[],
  startIdx: number,
  endIdx: number
) => {
  // if the collection is less than length 2, return
  if (startIdx >= endIdx) {
    // change the colors of this collection to sorted
    if (collection[startIdx]) {
      let { value } = collection[startIdx];
      collection[startIdx] = { value, color: COLORS.SORTED };
    }
    if (collection[endIdx]) {
      let { value } = collection[endIdx];
      collection[endIdx] = { value, color: COLORS.SORTED };
    }
    return collection;
  }
  // create a pivot at the startIdx
  let pivot = startIdx;
  // left pointer is pivot + 1
  let left = pivot + 1;
  // right pointer is the end of the collection
  let right = endIdx;

  // // start each collection with primary colors
  collection.forEach((num, index) => {
    if (index >= startIdx && index <= endIdx) {
      num.color = COLORS.PRIMARY;
    }
  });

  // set pivot color to be gold
  let { value } = collection[pivot];
  collection[pivot] = { value, color: COLORS.YELLOW };

  // while left pointer is less than or equal to right pivot
  while (left <= right) {
    // right and left pointers can be compare color
    let { value: l } = collection[left];
    let { value: r } = collection[right];
    collection[left] = { value: l, color: COLORS.COMPARE };
    collection[right] = { value: r, color: COLORS.COMPARE };

    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 20));

    // If value at left > pivot && value at right < pivot
    if (
      collection[left].value > collection[pivot].value &&
      collection[right].value < collection[pivot].value
    ) {
      // swap left and right values
      let { value: l } = collection[left];
      let { value: r } = collection[right];
      collection[left] = { value: r, color: collection[left].color };
      collection[right] = { value: l, color: collection[right].color };
    }

    // pivot value is >= left pointer, increase left pointer
    if (collection[pivot].value >= collection[left].value) {
      let { value: newVal } = collection[left];
      collection[left] = { value: newVal, color: COLORS.PRIMARY };
      left += 1;
    }

    // pivot value is <= right pointer, decrease right pointer
    if (collection[pivot].value <= collection[right].value) {
      let { value: newVal } = collection[right];
      collection[right] = { value: newVal, color: COLORS.PRIMARY };
      right -= 1;
    }
  }

  // pauses the event loop to better visualize the algo
  await new Promise((resolve) => setTimeout(resolve, 20));

  // Swap the values of pivot and right pointer
  let { value: p } = collection[pivot];
  let { value: rValue } = collection[right];
  collection[pivot] = { value: rValue, color: COLORS.COMPARE };
  collection[right] = { value: p, color: COLORS.SORTED };

  // find the smaller of the two remaining arrays
  let leftArrayIsSmaller = right - 1 - startIdx < endIdx - right + 1;

  // call quickSort on smallest remaining collection first
  if (leftArrayIsSmaller) {
    quickSort(collection, startIdx, right - 1);
    quickSort(collection, right + 1, endIdx);
  } else {
    quickSort(collection, right + 1, endIdx);
    quickSort(collection, startIdx, right - 1);
  }

  return collection;
};

export default quickSort;
