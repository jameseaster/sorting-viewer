<template>
  <div
    :style="{
      margin: '5vw',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
    }"
  >
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
.data {
  height: 300px;
  display: flex;
  max-width: 95%;
  align-items: flex-end;
}
</style>
