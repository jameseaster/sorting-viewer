<template>
  <div class="data-container">
    <div v-for="(bar, idx) in bars" :key="idx" :style="{ 'flex-grow': 1 }">
      <div
        :style="{
          flexGrow: 1,
          border: barBorder,
          height: bar.value + 'px',
          'background-color': bar.color,
          'border-radius': '3px 3px 0px 0px',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Imports
import { computed } from "vue";
import { COLORS } from "@/utils/constants";
import { useBarCount } from "@/composables/barCount";

// Composables
const { quantity, bars } = useBarCount();

// Computed
const barBorder = computed(() => {
  const under40 = quantity.value < 40;
  return `solid ${under40 ? "2px" : "1px"} ${COLORS.BG_COLOR}`;
});
</script>

<style scoped>
.data-container {
  height: 305px;
  display: flex;
  margin: 16px 5%;
  align-items: flex-end;
  justify-content: center;
}
</style>
