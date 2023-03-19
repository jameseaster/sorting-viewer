<template>
  <div class="slider-container">
    <p>Size</p>
    <div class="slider">
      <Slider
        :min="min"
        :step="step"
        :max="maxSize"
        class="w-14rem"
        v-model="quantity"
      />
    </div>
    <p>{{ quantity }}</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { INITIAL_BAR_COUNT } from "@/utils/constants";

export default {
  name: "BarSlider",
  setup() {
    const min = ref(5);
    const step = ref(1);
    const quantity = ref(INITIAL_BAR_COUNT);

    const maxSize = computed(() => {
      const screenWidth = window.innerWidth;
      const value = Math.floor((screenWidth * 0.25) / 5) * 5;
      return value < 300 ? value : 300;
    });

    return { min, step, quantity, maxSize };
  },

  // TODO: MOVE TO COMPOSABLE
  watch: {
    quantity: function (newVal) {
      this.$parent.$emit("changeSize", newVal);
    },
  },
};
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
