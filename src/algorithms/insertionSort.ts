import { Colors, type Bar } from "@/utils/types";

const insertionSort = async (collection: Bar[]) => {
  // change the color to primary to start sorting algorithm
  collection.forEach((num, index) => {
    collection[index] = { value: num.value, color: Colors.PRIMARY };
  });

  for (let i = 1; i < collection.length; i++) {
    let j = i;

    // highlight the values that are being compared
    let { value: a } = collection[j];
    let { value: b } = collection[j - 1];
    collection[j] = { value: a, color: Colors.COMPARE };
    collection[j - 1] = { value: b, color: Colors.COMPARE };

    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 30));

    // If the second value is greater than the first
    while (j > 0 && collection[j].value < collection[j - 1].value) {
      // swap the values
      let { value: a } = collection[j];
      let { value: b } = collection[j - 1];
      collection[j] = { value: b, color: Colors.SORTED };
      collection[j - 1] = { value: a, color: Colors.COMPARE };

      // highlight the next value to compare to
      if (collection[j - 2]) {
        let { value } = collection[j - 2];
        collection[j - 2] = { value, color: Colors.COMPARE };
      }

      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 30));

      j -= 1;
    }

    // pauses the event loop to better visualize the algo
    await new Promise((resolve) => setTimeout(resolve, 30));

    // sets colors to sorted
    if (collection[j]) {
      let { value: a } = collection[j];
      collection[j] = { value: a, color: Colors.SORTED };
    }
    if (collection[j - 1]) {
      let { value: b } = collection[j - 1];
      collection[j - 1] = { value: b, color: Colors.SORTED };
    }
  }
};

export default insertionSort;
