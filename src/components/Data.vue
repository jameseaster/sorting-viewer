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
          height: num.value + 'px',
          'background-color': num.color,
          'border-radius': '3px 3px 0px 0px',
          border: quantity < 60 ? 'solid 2px #17252a' : 'solid 1px #17252a',
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
};
</script>

<style scoped>
.data-container {
  margin: 16px 5%;
  display: flex;
  height: 350px;
  align-items: flex-end;
  justify-content: center;
}
</style>
