<template>
  <p class="info">{{ getInformation(name) }}</p>
</template>

<script>
import { algoInfo, Algorithm } from "../utils/constants";

export default {
  name: "Info",
  props: {
    name: {
      type: String,
      default: Algorithm.EMPTY,
    },
  },
  setup() {
    const getInformation = (name) => {
      return algoInfo[name];
    };
    return { getInformation };
  },
};
</script>

<style scoped>
.info {
  margin: 24px;
  max-width: 500px;
}
</style>
