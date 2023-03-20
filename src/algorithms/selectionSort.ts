import type { Bar } from "@/utils/types";
import { COLORS } from "@/utils/constants";

const selectionSort = async (collection: Bar[]) => {
  let currentIdx = 0;

  while (currentIdx < collection.length) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < collection.length; i++) {
      // highlight only the values that are being compared
      let { value } = collection[currentIdx];
      collection[currentIdx] = { value, color: COLORS.COMPARE };
      let { value: iIdx } = collection[i];
      collection[i] = { value: iIdx, color: COLORS.COMPARE };

      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 20));

      // If a value smaller than the value at smallestIdx is found
      if (collection[i].value < collection[smallestIdx].value) {
        // change the number at the smallest index to the primary color
        let { value } = collection[smallestIdx];
        collection[smallestIdx] = { value, color: COLORS.PRIMARY };
        // smallest index now equals i
        smallestIdx = i;
        // Highlight the new smallest with gold
        let { value: iValue } = collection[i];
        collection[i] = { value: iValue, color: "var(--yellow-300" };
      }

      if (smallestIdx !== i) {
        // Change comparison color back to primary to highlight the next comparison
        collection[i] = { value: iIdx, color: COLORS.PRIMARY };
      }
    }

    if (smallestIdx !== currentIdx) {
      // Swap values and set sorted color
      let { value: a } = collection[smallestIdx];
      let { value: b } = collection[currentIdx];
      collection[smallestIdx] = { value: b, color: COLORS.PRIMARY };
      collection[currentIdx] = { value: a, color: COLORS.SORTED };
    }
    // Set sorted color even if smallesIdx === currentIdx
    let { value } = collection[currentIdx];
    collection[currentIdx] = { value, color: COLORS.SORTED };

    currentIdx += 1;
  }
};

export default selectionSort;
