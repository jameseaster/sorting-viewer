<template>
  <p class="info">{{ getInformation(name) }}</p>
</template>

<script>
import { ALGO_INFO, ALGORITHMS } from "@/utils/constants";

export default {
  name: "Info",
  props: {
    name: { type: String, default: ALGORITHMS.EMPTY },
  },
  setup() {
    const getInformation = (name) => {
      return ALGO_INFO[name];
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
