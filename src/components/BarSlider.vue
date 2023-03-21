<template>
  <div class="slider-container">
    <p>Size</p>
    <div class="slider">
      <Slider
        :min="min"
        :step="step"
        :max="maxSize"
        class="w-14rem"
        v-model="sliderValue"
      />
    </div>
    <p>{{ sliderValue }}</p>
  </div>
</template>

<script setup lang="ts">
// Imports
import { computed, ref, watch } from "vue";
import { INITIAL_BAR_COUNT } from "@/utils/constants";
import { useBarCount } from "@/composables/barCount";

// Composables
const { updateBarCount } = useBarCount();

// Constants
const min = ref(5);
const step = ref(1);
const sliderValue = ref(INITIAL_BAR_COUNT);

// Computed
const maxSize = computed(() => {
  const screenWidth = window.innerWidth;
  const value = Math.floor((screenWidth * 0.25) / 5) * 5;
  return value < 300 ? value : 300;
});

// Watchers
watch(sliderValue, (newValue) => updateBarCount(newValue));
</script>

<style scoped>
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider {
  width: 200px;
  margin: 16px;
  display: block;
}
</style>
