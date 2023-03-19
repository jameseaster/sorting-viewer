import { Colors, type Bar } from "@/utils/types";
import { heapSortColorLevels } from "@/utils/constants";

const heapSort = async (array: Bar[]) => {
  // build max heap
  buildMaxHeap(array);
  // while endpoint is greater than 0
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    // swap first value with the last
    swap(0, endIdx, array);
    // siftDown first value, leaving max at the end
    siftDown(0, endIdx - 1, array);
    // change the color of the endIdx, its in its sorted position
    let { value } = array[endIdx];
    array[endIdx] = { value, color: Colors.SORTED };
    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 80));
  }
  // change the color of the first, its in its sorted position
  let { value } = array[0];
  array[0] = { value, color: Colors.SORTED };
  return array;
};

const buildMaxHeap = (array: Bar[]) => {
  // find last parent index
  let lastParentIdx = Math.floor((array.length - 2) / 2);
  // sift down each parent
  for (let curParIdx = lastParentIdx; curParIdx >= 0; curParIdx--) {
    siftDown(curParIdx, array.length - 1, array);
  }
};

const siftDown = (currentIdx: number, endIdx: number, array: Bar[]) => {
  colorLevels(array, endIdx);
  // find first child
  let childOneIdx = currentIdx * 2 + 1;
  // largest child index
  let largestChildIdx;
  // only continue if childOneIdx is less <= endIdx
  while (childOneIdx <= endIdx) {
    // find childTwoIdx, must be >= endIdx
    let childTwoIdx = endIdx >= currentIdx * 2 + 2 ? currentIdx * 2 + 2 : -1;
    // find the child with the greater value
    if (
      childTwoIdx !== -1 &&
      array[childTwoIdx].value > array[childOneIdx].value
    ) {
      largestChildIdx = childTwoIdx;
    } else {
      largestChildIdx = childOneIdx;
    }
    // if largest child is greater than parent
    if (array[largestChildIdx].value > array[currentIdx].value) {
      // swap them
      swap(largestChildIdx, currentIdx, array);
      // update currentIdx
      currentIdx = largestChildIdx;
      // update childOneIdx
      childOneIdx = currentIdx * 2 + 1;
      // if parent is larger than largest child, return
    } else {
      return;
    }
  }
};

// swap the values
const swap = async (a: number, b: number, array: Bar[]) => {
  let { value: aVal, color: aCol } = array[a];
  let { value: bVal, color: bCol } = array[b];
  array[a] = { value: bVal, color: aCol };
  array[b] = { value: aVal, color: bCol };
};

// set the color based on the level in the heap
const colorLevels = (array: Bar[], endIdx: number) => {
  array.forEach((num, index) => {
    if (index === 0) {
      let { value } = num;
      array[index] = { value, color: Colors.PRIMARY_LIGHT };
    } else if (index > 0 && index < endIdx) {
      let level = 1 + Math.floor(Math.log(index + 1) / Math.log(2));
      let { value } = num;
      array[index] = { value, color: heapSortColorLevels[level - 1] };
    }
  });
};

export default heapSort;
