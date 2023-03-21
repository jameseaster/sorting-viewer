<template>
  <ThemeSelector />
  <Header />
  <Data />
  <Controls
    @heap="heap"
    @quick="quick"
    @merge="merge"
    @bubble="bubble"
    @insertion="insertion"
    @selection="selection"
    @reset="createNewBarList"
  />
</template>

<script setup>
import { onMounted } from "vue";
import Data from "./components/Data.vue";
import Header from "./components/Header.vue";
import Controls from "./components/Controls.vue";
import heapSort from "./algorithms/heapSort.ts";
import mergeSort from "./algorithms/mergeSort.ts";
import quickSort from "./algorithms/quickSort.ts";
import bubbleSort from "./algorithms/bubbleSort.ts";
import { useBarCount } from "@/composables/barCount";
import insertionSort from "./algorithms/insertionSort.ts";
import selectionSort from "./algorithms/selectionSort.ts";
import ThemeSelector from "./components/ThemeSelector.vue";
import { COLORS, ALGORITHMS, ANIMATION_ACTION } from "@/utils/constants";

const { createNewBarList, lastAlgo, bars } = useBarCount();

const bubble = () => {
  lastAlgo.value = ALGORITHMS.BUBBLE;
  bubbleSort(bars.value);
};

const insertion = () => {
  lastAlgo.value = ALGORITHMS.INSERTION;
  insertionSort(bars.value);
};

const selection = () => {
  lastAlgo.value = ALGORITHMS.SELECTION;
  selectionSort(bars.value);
};
const quick = () => {
  lastAlgo.value = ALGORITHMS.QUICK;
  quickSort(bars.value, 0, bars.value.length - 1);
};
const heap = () => {
  lastAlgo.value = ALGORITHMS.HEAP;
  heapSort(bars.value);
};
const merge = () => {
  lastAlgo.value = ALGORITHMS.MERGE;
  animate(mergeSort(bars.value));
};

const animate = async (animations) => {
  for (let todo of animations) {
    if (lastAlgo.value !== ALGORITHMS.MERGE) {
      break;
    }

    if (todo.action === ANIMATION_ACTION.COMPARE) {
      // changes the color of the two indexes being compared
      let { value: val1, color: col1 } = bars.value[todo.idx1];
      let { value: val2, color: col2 } = bars.value[todo.idx2];
      bars.value[todo.idx1] = { value: val1, color: COLORS.COMPARE };
      bars.value[todo.idx2] = { value: val2, color: COLORS.COMPARE };
      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 30));
      // changes the colors back to original color
      bars.value[todo.idx1] = { value: val1, color: col1 };
      bars.value[todo.idx2] = { value: val2, color: col2 };
    } else {
      // pauses the event loop to better visualize the algo
      await new Promise((resolve) => setTimeout(resolve, 30));
      // overwrite idx1 with idx2, change color to sorted
      bars.value[todo.idx1] = { value: todo.value, color: COLORS.SORTED };
    }
  }
};
</script>
