import { Colors, type Bar } from "@/utils/types";

const bubbleSort = async (bars: Bar[]) => {
  // change the color to primary to start sorting algorithm
  bars.forEach((num, i) => {
    bars[i] = { value: num.value, color: Colors.PRIMARY };
  });

  let counter = 0;
  let swap = true;

  while (counter < bars.length && swap) {
    swap = false;
    for (let i = 0; i < bars.length - 1 - counter; i++) {
      // change color of two indeces that are being compared
      let { value: a } = bars[i];
      let { value: b } = bars[i + 1];
      bars[i] = { value: a, color: Colors.COMPARE };
      bars[i + 1] = { value: b, color: Colors.COMPARE };

      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 30));

      // if the first index is greater than the second
      if (bars[i].value > bars[i + 1].value) {
        swap = true;
        // swap indeces
        let { value, color } = bars[i];
        let { value: tempValue } = bars[i + 1];
        bars[i + 1] = { value, color };
        bars[i] = { value: tempValue, color };
      }

      // change colors back to primary and set the final index color to sorted
      let { value: newA } = bars[i];
      let { value: newB } = bars[i + 1];
      bars[i] = { value: newA, color: Colors.PRIMARY };
      bars[i + 1] = { value: newB, color: Colors.SORTED };
    }
    // increment counter
    counter += 1;
  }
  // change the color to sorted on the final iteration
  bars.forEach((num, i) => {
    bars[i] = { value: num.value, color: Colors.SORTED };
  });
};

export default bubbleSort;
