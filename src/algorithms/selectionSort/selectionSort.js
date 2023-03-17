export default async function selectionSort(ref, array) {
  let currentIdx = 0;
  while (currentIdx < array.length) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      // highlight only the values that are being compared
      let { value } = array[currentIdx];
      ref.numbers[currentIdx] = { value, color: ref.compare };
      let { value: iIdx } = array[i];
      ref.numbers[i] = { value: iIdx, color: ref.compare };

      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 20));

      // If a value smaller than the value at smallestIdx is found
      if (array[i].value < array[smallestIdx].value) {
        // change the number at the smallest index to the primary color
        let { value } = array[smallestIdx];
        ref.numbers[smallestIdx] = { value, color: ref.primary };
        // smallest index now equals i
        smallestIdx = i;
        // Highlight the new smallest with gold
        let { value: iValue } = array[i];
        ref.numbers[i] = { value: iValue, color: "gold" };
      }

      if (smallestIdx !== i) {
        // Change comparison color back to primary to highlight the next comparison
        ref.numbers[i] = { value: iIdx, color: ref.primary };
      }
    }

    if (smallestIdx !== currentIdx) {
      // Swap values and set sorted color
      let { value: a } = array[smallestIdx];
      let { value: b } = array[currentIdx];
      ref.numbers[smallestIdx] = { value: b, color: ref.primary };
      ref.numbers[currentIdx] = { value: a, color: ref.sorted };
    }
    // Set sorted color even if smallesIdx === currentIdx
    let { value } = array[currentIdx];
    ref.numbers[currentIdx] = { value, color: ref.sorted };

    currentIdx += 1;
  }
}
