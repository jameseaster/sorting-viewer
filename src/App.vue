
<script setup lang="ts">
import Data from "./components/Data.vue";
import Header from "./components/Header.vue";
import heapSort from "./algorithms/heapSort";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";
import bubbleSort from "./algorithms/bubbleSort";
import Controls from "./components/Controls.vue";
import { useBarCount } from "@/composables/barCount";
import insertionSort from "./algorithms/insertionSort";
import selectionSort from "./algorithms/selectionSort";
import { COLORS, ALGORITHMS } from "@/utils/constants";
import ThemeSelector from "./components/ThemeSelector.vue";
import type { Animations, Compare, Overwrite } from "@/utils/types";

const { isSorting, createNewBarList, lastAlgo, bars } = useBarCount();

const bubble = async () => {
  bars.value = bars.value.map((b) => ({ ...b, color: COLORS.PRIMARY }));
  isSorting.value = true;
  lastAlgo.value = ALGORITHMS.BUBBLE;
  await bubbleSort(bars.value);
  isSorting.value = false;
};

const insertion = async () => {
  bars.value = bars.value.map((b) => ({ ...b, color: COLORS.PRIMARY }));
  isSorting.value = true;
  lastAlgo.value = ALGORITHMS.INSERTION;
  await insertionSort(bars.value);
  isSorting.value = false;
};

const selection = async () => {
  bars.value = bars.value.map((b) => ({ ...b, color: COLORS.PRIMARY }));
  isSorting.value = true;
  lastAlgo.value = ALGORITHMS.SELECTION;
  await selectionSort(bars.value);
  isSorting.value = false;
};
const quick = async () => {
  bars.value = bars.value.map((b) => ({ ...b, color: COLORS.PRIMARY }));
  isSorting.value = true;
  lastAlgo.value = ALGORITHMS.QUICK;
  await quickSort(bars.value, 0, bars.value.length - 1);
  isSorting.value = false;
};
const heap = async () => {
  bars.value = bars.value.map((b) => ({ ...b, color: COLORS.PRIMARY }));
  isSorting.value = true;
  lastAlgo.value = ALGORITHMS.HEAP;
  await heapSort(bars.value);
  isSorting.value = false;
};
const merge = async () => {
  bars.value = bars.value.map((b) => ({ ...b, color: COLORS.PRIMARY }));
  isSorting.value = true;
  lastAlgo.value = ALGORITHMS.MERGE;
  const animations = mergeSort(bars.value);
  await animate(animations);
  isSorting.value = false;
};

const animate = async (animations: Animations) => {
  for (let todo of animations) {
    if (lastAlgo.value !== ALGORITHMS.MERGE) break;

    const isComparativeAnimation = (animation: Compare | Overwrite): animation is Compare => {
      return animation.action === "compare";
    };

    if (isComparativeAnimation(todo)) {
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

<template>
  <ThemeSelector />
  <Header />
  <Data />
  <Controls
    :isSorting="isSorting"
    @heap="heap"
    @quick="quick"
    @merge="merge"
    @bubble="bubble"
    @insertion="insertion"
    @selection="selection"
    @reset="createNewBarList"
  />
</template>
