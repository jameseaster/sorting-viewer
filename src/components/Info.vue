<template>
  <p class="info">{{ algoInfo }}</p>
</template>

<script setup lang="ts">
// Imports
import { computed } from "@vue/runtime-core";
import { ALGO_INFO, ALGORITHMS } from "@/utils/constants";

// Props
const props = withDefaults(defineProps<{ name: string }>(), {
  name: ALGORITHMS.EMPTY,
});

// Computed
const algoInfo = computed(() => {
  return ALGO_INFO[props.name];
});
</script>

<style scoped>
.info {
  margin: 12px;
  max-width: 500px;
}
</style>
