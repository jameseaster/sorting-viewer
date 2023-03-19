<template>
  <div class="data-container">
    <div
      v-bind:key="index"
      :style="{ 'flex-grow': 1 }"
      v-for="(num, index) in numbers"
    >
      <div
        :style="{
          flexGrow: 1,
          border: barBorder,
          height: num.value + 'px',
          'background-color': num.color,
          'border-radius': '3px 3px 0px 0px',
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Data",
  props: {
    numbers: Array,
    quantity: Number,
  },
  computed: {
    barBorder() {
      const under40 = this.quantity < 40;
      return `solid ${under40 ? "2px" : "1px"} var(--surface-a)`;
    },
  },
};
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
