import { Colors, type Bar } from "@/utils/types";

const bubbleSort = async (collection: Bar[]) => {
  // change the color to primary to start sorting algorithm
  collection.forEach((num, i) => {
    collection[i] = { value: num.value, color: Colors.PRIMARY };
  });

  let counter = 0;
  let swap = true;

  while (counter < collection.length && swap) {
    swap = false;
    for (let i = 0; i < collection.length - 1 - counter; i++) {
      // change color of two indeces that are being compared
      let { value: a } = collection[i];
      let { value: b } = collection[i + 1];
      collection[i] = { value: a, color: Colors.COMPARE };
      collection[i + 1] = { value: b, color: Colors.COMPARE };

      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 30));

      // if the first index is greater than the second
      if (collection[i].value > collection[i + 1].value) {
        swap = true;
        // swap indeces
        let { value, color } = collection[i];
        let { value: tempValue } = collection[i + 1];
        collection[i + 1] = { value, color };
        collection[i] = { value: tempValue, color };
      }

      // change colors back to primary and set the final index color to sorted
      let { value: newA } = collection[i];
      let { value: newB } = collection[i + 1];
      collection[i] = { value: newA, color: Colors.PRIMARY };
      collection[i + 1] = { value: newB, color: Colors.SORTED };
    }
    // increment counter
    counter += 1;
  }
  // change the color to sorted on the final iteration
  collection.forEach((num, i) => {
    collection[i] = { value: num.value, color: Colors.SORTED };
  });
};

export default bubbleSort;
