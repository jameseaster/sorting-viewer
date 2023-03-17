<template>
  <div class="controls-container">
    <!-- Dataset Size -->
    <div class="mb-16">
      <BarSlider @changeSize="changeSize" />
    </div>

    <!-- Algorithm Selector -->
    <div class="mb-16">
      <Dropdown
        v-model="selected"
        :options="options"
        optionLabel="text"
        class="dropdown"
        placeholder="Select Algorithm"
      />
      <Button label="Go!" :value="selected" @click="handleClick(selected)" />
    </div>

    <!-- Other Controls -->
    <div class="controls">
      <Button class="btn" @click="$emit('new-array')" label="Reset" />
      <Button class="btn" :label="infoBtnTitle" @click="toggleShowInfo" />
    </div>

    <!-- Description -->
    <Info :showInfo="showInfo" :name="selected.value" />

    <!-- Notifications -->
    <Toast />
  </div>
</template>

<script>
import Info from "./Info.vue";
import BarSlider from "./BarSlider.vue";

export default {
  name: "Controls",
  components: { Info, BarSlider },
  data() {
    return {
      showInfo: false,
      selected: { value: "toast", text: "Select An Algorithm", disabled: true },
      options: [
        { value: "toast", text: "Select An Algorithm", disabled: true },
        { value: "bubble", text: "Bubble Sort" },
        { value: "insertion", text: "Insertion Sort" },
        { value: "selection", text: "Selection Sort" },
        { value: "quick", text: "Quick Sort" },
        { value: "heap", text: "Heap Sort" },
        { value: "merge", text: "Merge Sort" },
      ],
    };
  },
  computed: {
    infoBtnTitle() {
      return this.showInfo ? "Hide" : "Algo Info";
    },
  },
  methods: {
    toggleShowInfo() {
      this.showInfo = !this.showInfo;
    },
    handleClick: function (selected) {
      const { value } = selected;
      value === "toast" ? this.toast() : this.$emit(value);
    },
    toast: function () {
      this.$toast.add({
        life: 3000,
        summary: "Info",
        severity: "info",
        detail: "Select an algorithm to sort the columns",
      });
    },
  },
};
</script>

<style scoped>
.controls-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.dropdown {
  width: 208px;
  text-align: left;
}
.mb-16 {
  margin-bottom: 16px;
}
.controls {
  width: 200px;
  display: flex;
  margin-top: 8px;
  align-items: center;
  justify-content: space-around;
}
.btn {
  min-width: 92px;
}
</style>
