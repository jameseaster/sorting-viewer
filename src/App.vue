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

export default {
  name: "App",
  components: {
    Data,
    Header,
    Controls,
    ThemeSelector,
  },
  data() {
    return {
      bars: [],
      lastAlgo: "",
      quantity: INITIAL_BAR_COUNT,
    };
  },
  created() {
    // TODO: STOP SORTING, THEN POPULATE ARRAY
    this.populateArray();
  },
  methods: {
    changeSize: function (number) {
      this.quantity = number;
      this.populateArray();
    },
    populateArray: function () {
      this.lastAlgo = "";
      this.bars = [];
      for (let i = 0; i < this.quantity; i++) {
        let value = Math.round(Math.random() * 280) + 20;
        let color = COLORS.PRIMARY;
        this.bars.push({ value, color });
      }
    },
    bubble: function () {
      this.lastAlgo = ALGORITHMS.BUBBLE;
      bubbleSort(this.bars);
    },
    insertion: function () {
      this.lastAlgo = ALGORITHMS.INSERTION;
      insertionSort(this.bars);
    },
    selection: function () {
      this.lastAlgo = ALGORITHMS.SELECTION;
      selectionSort(this.bars);
    },
    quick: function () {
      this.lastAlgo = ALGORITHMS.QUICK;
      quickSort(this.bars, 0, this.bars.length - 1);
    },
    heap: function () {
      this.lastAlgo = ALGORITHMS.HEAP;
      heapSort(this.bars);
    },
    merge: function () {
      this.lastAlgo = ALGORITHMS.MERGE;
      this.animate(mergeSort(this.bars));
    },
    animate: async function (animations) {
      for (let todo of animations) {
        if (this.lastAlgo !== ALGORITHMS.MERGE) {
          break;
        }

        if (todo.action === ANIMATION_ACTION.COMPARE) {
          // changes the color of the two indexes being compared
          let { value: val1, color: col1 } = this.bars[todo.idx1];
          let { value: val2, color: col2 } = this.bars[todo.idx2];
          this.bars[todo.idx1] = { value: val1, color: COLORS.COMPARE };
          this.bars[todo.idx2] = { value: val2, color: COLORS.COMPARE };
          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 30));
          // changes the colors back to original color
          this.bars[todo.idx1] = { value: val1, color: col1 };
          this.bars[todo.idx2] = { value: val2, color: col2 };
        } else {
          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 30));
          // overwrite idx1 with idx2, change color to sorted
          this.bars[todo.idx1] = { value: todo.value, color: COLORS.SORTED };
        }
      }
    },
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
