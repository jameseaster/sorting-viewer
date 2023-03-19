<script>
// TODO: Convert to typescript
// <script setup lang="ts">
import Data from "./components/Data.vue";
import Header from "./components/Header.vue";
import Controls from "./components/Controls.vue";
import heapSort from "./algorithms/heapSort.ts";
import mergeSort from "./algorithms/mergeSort.ts";
import bubbleSort from "./algorithms/bubbleSort.ts";
import { INITIAL_BAR_COUNT } from "@/utils/constants";
import insertionSort from "./algorithms/insertionSort.ts";
import ThemeSelector from "./components/ThemeSelector.vue";

import quickSort from "./algorithms/quickSort.js";
import selectionSort from "./algorithms/selectionSort.js";

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
      compare: "var(--teal-500)", // TODO: REMOVE
      sorted: "var(--purple-400)", // TODO: REMOVE
      primary: "var(--primary-color)", // TODO: REMOVE
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
        let color = this.primary;
        this.bars.push({ value, color });
      }
    },
    bubble: function () {
      this.lastAlgo = "bubble";
      bubbleSort(this.bars);
    },
    insertion: function () {
      this.lastAlgo = "insertion";
      insertionSort(this.bars);
    },
    selection: function () {
      this.lastAlgo = "selection";
      selectionSort(this, this.bars);
    },
    quick: function () {
      this.lastAlgo = "quick";
      quickSort(this, this.bars, 0, this.bars.length - 1);
    },
    heap: function () {
      this.lastAlgo = "heap";
      heapSort(this.bars);
    },
    merge: function () {
      this.lastAlgo = "merge";
      this.animate(mergeSort(this.bars));
    },
    animate: async function (animations) {
      for (let todo of animations) {
        if (this.lastAlgo !== "merge") {
          break;
        }

        if (todo.action === "compare") {
          // changes the color of the two indexes being compared
          let { value: val1, color: col1 } = this.bars[todo.idx1];
          let { value: val2, color: col2 } = this.bars[todo.idx2];
          this.bars[todo.idx1] = { value: val1, color: this.compare };
          this.bars[todo.idx2] = { value: val2, color: this.compare };
          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 30));
          // changes the colors back to original color
          this.bars[todo.idx1] = { value: val1, color: col1 };
          this.bars[todo.idx2] = { value: val2, color: col2 };
        } else {
          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 30));
          // overwrite idx1 with idx2, change color to sorted
          this.bars[todo.idx1] = { value: todo.value, color: this.sorted };
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
    @new-array="populateArray"
  />
</template>
