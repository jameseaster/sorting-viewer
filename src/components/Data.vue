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

// TODO: UPDATE TO SETUP TAG
<script>
import { computed } from "vue";
export default {
  name: "Data",
  props: {
    numbers: {
      type: Array,
      default: [],
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    // Computed
    const barBorder = computed(() => {
      const under40 = props.quantity < 40;
      return `solid ${under40 ? "2px" : "1px"} var(--surface-a)`;
    });

    return { barBorder };
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
