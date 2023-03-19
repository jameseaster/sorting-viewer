<template>
  <div class="data-container">
    <div
      v-for="(bar, idx) in bars"
      v-bind:key="idx"
      :style="{ 'flex-grow': 1 }"
    >
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

// TODO: UPDATE TO SETUP TAG
<script>
import { computed } from "vue";
export default {
  name: "Data",
  props: {
    bars: { type: Array, default: [] },
    quantity: { type: Number, default: 0 },
  },
  setup(props) {
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
