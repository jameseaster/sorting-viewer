<script>
// TODO: Convert to typescript
// <script setup lang="ts">
import Data from "./components/Data.vue";
import Header from "./components/Header.vue";
import Controls from "./components/Controls.vue";
import heapSort from "./algorithms/heapSort.ts";
import mergeSort from "./algorithms/mergeSort.ts";
import quickSort from "./algorithms/quickSort.ts";
import bubbleSort from "./algorithms/bubbleSort.ts";
import insertionSort from "./algorithms/insertionSort.ts";
import selectionSort from "./algorithms/selectionSort.ts";
import ThemeSelector from "./components/ThemeSelector.vue";
import {
  COLORS,
  ALGORITHMS,
  ANIMATION_ACTION,
  INITIAL_BAR_COUNT,
} from "@/utils/constants";
import { ref, onMounted } from "vue";

export default {
  name: "App",
  components: {
    Data,
    Header,
    Controls,
    ThemeSelector,
  },
  setup() {
    const bars = ref([]);
    const lastAlgo = ref("");
    const quantity = ref(INITIAL_BAR_COUNT);

    onMounted(() => {
      // TODO: STOP SORTING, THEN POPULATE ARRAY
      populateArray();
    });

    const changeSize = (number) => {
      quantity.value = number;
      populateArray();
    };

    const populateArray = () => {
      lastAlgo.value = "";
      bars.value = [];
      for (let i = 0; i < quantity.value; i++) {
        let value = Math.round(Math.random() * 280) + 20;
        let color = COLORS.PRIMARY;
        bars.value.push({ value, color });
      }
    };

    const bubble = () => {
      lastAlgo.value = ALGORITHMS.BUBBLE;
      bubbleSort(bars);
    };

    const insertion = () => {
      lastAlgo.value = ALGORITHMS.INSERTION;
      insertionSort(bars);
    };
    const selection = () => {
      lastAlgo.value = ALGORITHMS.SELECTION;
      selectionSort(bars);
    };
    const quick = () => {
      lastAlgo.value = ALGORITHMS.QUICK;
      quickSort(bars, 0, bars.length - 1);
    };
    const heap = () => {
      lastAlgo.value = ALGORITHMS.HEAP;
      heapSort(bars);
    };
    const merge = () => {
      lastAlgo.value = ALGORITHMS.MERGE;
      this.animate(mergeSort(bars));
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

    return {
      bars,
      lastAlgo,
      quantity,
      bubble,
      insertion,
      selection,
      quick,
      heap,
      merge,
      animate,
      populateArray,
      changeSize,
    };
  },
};
</script>

<template>
  <ThemeSelector />
  <Header />
  <Data v-bind:bars="bars" :quantity="quantity" />
  <Controls
    @heap="heap"
    @quick="quick"
    @merge="merge"
    @bubble="bubble"
    @insertion="insertion"
    @selection="selection"
    @changeSize="changeSize"
    @reset="populateArray"
  />
</template>
