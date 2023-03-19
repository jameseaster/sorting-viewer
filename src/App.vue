<script>
// TODO: Convert to typescript
// <script setup lang="ts">
import Data from "./components/Data.vue";
import Header from "./components/Header.vue";
import Controls from "./components/Controls.vue";
import heapSort from "./algorithms/heapSort/heapSort.js";
import ThemeSelector from "./components/ThemeSelector.vue";
import quickSort from "./algorithms/quickSort/quickSort.js";
import mergeSort from "./algorithms/mergeSort/mergeSort.js";
import bubbleSort from "./algorithms/bubbleSort/bubbleSort.js";
import insertionSort from "./algorithms/insertionSort/insertionSort.js";
import selectionSort from "./algorithms/selectionSort/selectionSort.js";

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
      numbers: [],
      lastAlgo: "",
      quantity: 50,
      compare: "var(--teal-500)",
      sorted: "var(--purple-400)",
      primary: "var(--primary-color)",
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
      this.numbers = [];
      for (let i = 0; i < this.quantity; i++) {
        let value = Math.round(Math.random() * 280) + 20;
        let color = this.primary;
        this.numbers.push({ value, color });
      }
    },
    bubble: function () {
      this.lastAlgo = "bubble";
      bubbleSort(this, this.numbers);
    },
    insertion: function () {
      this.lastAlgo = "insertion";
      insertionSort(this, this.numbers);
    },
    selection: function () {
      this.lastAlgo = "selection";
      selectionSort(this, this.numbers);
    },
    quick: function () {
      this.lastAlgo = "quick";
      quickSort(this, this.numbers, 0, this.numbers.length - 1);
    },
    heap: function () {
      this.lastAlgo = "heap";
      heapSort(this, this.numbers);
    },
    merge: function () {
      this.lastAlgo = "merge";
      this.animate(mergeSort(this, this.numbers));
    },
    animate: async function (animations) {
      for (let todo of animations) {
        if (this.lastAlgo !== "merge") {
          break;
        }

        if (todo.action === "compare") {
          // changes the color of the two indexes being compared
          let { value: val1, color: col1 } = this.numbers[todo.idx1];
          let { value: val2, color: col2 } = this.numbers[todo.idx2];
          this.numbers[todo.idx1] = { value: val1, color: this.compare };
          this.numbers[todo.idx2] = { value: val2, color: this.compare };
          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 30));
          // changes the colors back to original color
          this.numbers[todo.idx1] = { value: val1, color: col1 };
          this.numbers[todo.idx2] = { value: val2, color: col2 };
        } else {
          // pauses the event loop to better visualize the algo
          await new Promise((resolve) => setTimeout(resolve, 30));
          // overwrite idx1 with idx2, change color to sorted
          this.numbers[todo.idx1] = { value: todo.value, color: this.sorted };
        }
      }
    },
  },
};
</script>

<template>
  <ThemeSelector />
  <Header />
  <Data v-bind:numbers="numbers" :quantity="quantity" />
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
