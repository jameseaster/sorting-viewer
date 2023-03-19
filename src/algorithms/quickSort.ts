import { Colors, type Bar } from "@/utils/types";

export default async function quickSort(
  array: Bar[],
  startIdx: number,
  endIdx: number
) {
  // if the array is less than length 2, return
  if (startIdx >= endIdx) {
    // change the colors of this array to sorted
    if (array[startIdx]) {
      let { value } = array[startIdx];
      array[startIdx] = { value, color: Colors.SORTED };
    }
    if (array[endIdx]) {
      let { value } = array[endIdx];
      array[endIdx] = { value, color: Colors.SORTED };
    }
    return array;
  }
  // create a pivot at the startIdx
  let pivot = startIdx;
  // left pointer is pivot + 1
  let left = pivot + 1;
  // right pointer is the end of the array
  let right = endIdx;

  // // start each array with primary colors
  array.forEach((num, index) => {
    if (index >= startIdx && index <= endIdx) {
      num.color = Colors.PRIMARY;
    }
  });

  // set pivot color to be gold
  let { value } = array[pivot];
  array[pivot] = { value, color: Colors.YELLOW };

  // while left pointer is less than or equal to right pivot
  while (left <= right) {
    // right and left pointers can be compare color
    let { value: l } = array[left];
    let { value: r } = array[right];
    array[left] = { value: l, color: Colors.COMPARE };
    array[right] = { value: r, color: Colors.COMPARE };

    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 20));

    // If value at left > pivot && value at right < pivot
    if (
      array[left].value > array[pivot].value &&
      array[right].value < array[pivot].value
    ) {
      // swap left and right values
      let { value: l } = array[left];
      let { value: r } = array[right];
      array[left] = { value: r, color: array[left].color };
      array[right] = { value: l, color: array[right].color };
    }

    // pivot value is >= left pointer, increase left pointer
    if (array[pivot].value >= array[left].value) {
      let { value: newVal } = array[left];
      array[left] = { value: newVal, color: Colors.PRIMARY };
      left += 1;
    }

    // pivot value is <= right pointer, decrease right pointer
    if (array[pivot].value <= array[right].value) {
      let { value: newVal } = array[right];
      array[right] = { value: newVal, color: Colors.PRIMARY };
      right -= 1;
    }
  }

  // pauses the event loop to better visualize the algo
  await new Promise((resolve) => setTimeout(resolve, 20));

  // Swap the values of pivot and right pointer
  let { value: p } = array[pivot];
  let { value: rValue } = array[right];
  array[pivot] = { value: rValue, color: Colors.COMPARE };
  array[right] = { value: p, color: Colors.SORTED };

  // find the smaller of the two remaining arrays
  let leftArrayIsSmaller = right - 1 - startIdx < endIdx - right + 1;

  // call quickSort on smallest remaining array first
  if (leftArrayIsSmaller) {
    quickSort(array, startIdx, right - 1);
    quickSort(array, right + 1, endIdx);
  } else {
    quickSort(array, right + 1, endIdx);
    quickSort(array, startIdx, right - 1);
  }

  return array;
}
