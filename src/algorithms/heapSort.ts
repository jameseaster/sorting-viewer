import { Colors, type Bar } from "@/utils/types";
import { heapSortColorLevels } from "@/utils/constants";

const heapSort = async (collection: Bar[]) => {
  // build max heap
  buildMaxHeap(collection);
  // while endpoint is greater than 0
  for (let endIdx = collection.length - 1; endIdx > 0; endIdx--) {
    // swap first value with the last
    swap(0, endIdx, collection);
    // siftDown first value, leaving max at the end
    siftDown(0, endIdx - 1, collection);
    // change the color of the endIdx, its in its sorted position
    let { value } = collection[endIdx];
    collection[endIdx] = { value, color: Colors.SORTED };
    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 80));
  }
  // change the color of the first, its in its sorted position
  let { value } = collection[0];
  collection[0] = { value, color: Colors.SORTED };
  return collection;
};

const buildMaxHeap = (collection: Bar[]) => {
  // find last parent index
  let lastParentIdx = Math.floor((collection.length - 2) / 2);
  // sift down each parent
  for (let curParIdx = lastParentIdx; curParIdx >= 0; curParIdx--) {
    siftDown(curParIdx, collection.length - 1, collection);
  }
};

const siftDown = (currentIdx: number, endIdx: number, collection: Bar[]) => {
  colorLevels(collection, endIdx);
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
      collection[childTwoIdx].value > collection[childOneIdx].value
    ) {
      largestChildIdx = childTwoIdx;
    } else {
      largestChildIdx = childOneIdx;
    }
    // if largest child is greater than parent
    if (collection[largestChildIdx].value > collection[currentIdx].value) {
      // swap them
      swap(largestChildIdx, currentIdx, collection);
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
const swap = async (a: number, b: number, collection: Bar[]) => {
  let { value: aVal, color: aCol } = collection[a];
  let { value: bVal, color: bCol } = collection[b];
  collection[a] = { value: bVal, color: aCol };
  collection[b] = { value: aVal, color: bCol };
};

// set the color based on the level in the heap
const colorLevels = (collection: Bar[], endIdx: number) => {
  collection.forEach((num, index) => {
    if (index === 0) {
      let { value } = num;
      collection[index] = { value, color: Colors.PRIMARY_LIGHT };
    } else if (index > 0 && index < endIdx) {
      let level = 1 + Math.floor(Math.log(index + 1) / Math.log(2));
      let { value } = num;
      collection[index] = { value, color: heapSortColorLevels[level - 1] };
    }
  });
};

export default heapSort;
