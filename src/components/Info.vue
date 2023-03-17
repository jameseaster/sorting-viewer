<template>
  <p class="info" v-if="showInfo">{{ getInformation(name) }}</p>
</template>

<script>
import bubbleInfo from "../algorithms/bubbleSort/bubbleInfo.js";
import insertionInfo from "../algorithms/insertionSort/insertionInfo.js";
import selectionInfo from "../algorithms/selectionSort/selectionInfo.js";
import quickInfo from "../algorithms/quickSort/quickInfo.js";
import heapInfo from "../algorithms/heapSort/heapInfo.js";
import mergeInfo from "../algorithms/mergeSort/mergeInfo.js";

export default {
  name: "Info",
  props: {
    showInfo: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    getInformation(name) {
      if (name === "bubble") {
        return bubbleInfo();
      } else if (name === "insertion") {
        return insertionInfo();
      } else if (name === "selection") {
        return selectionInfo();
      } else if (name === "quick") {
        return quickInfo();
      } else if (name === "heap") {
        return heapInfo();
      } else if (name === "merge") {
        return mergeInfo();
      } else {
        return `Pick an algorithm from the dropdown menu!`;
      }
    },
  },
};
</script>

<style scoped>
.info {
  margin: 24px;
  max-width: 500px;
}
</style>
