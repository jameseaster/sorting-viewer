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
export default {
  name: "BarSlider",
  data() {
    return {
      min: 5,
      step: 1,
      quantity: 50,
    };
  },
  watch: {
    quantity: function (newVal) {
      this.$parent.$emit("changeSize", newVal);
    },
  },
  computed: {
    maxSize() {
      const screenWidth = window.innerWidth;
      return Math.floor((screenWidth * 0.25) / 5) * 5;
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
