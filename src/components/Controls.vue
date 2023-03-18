<template>
  <div class="controls-container">
    <!-- Dataset Size -->
    <div class="mb-8">
      <BarSlider />
    </div>

    <!-- Algorithm Selector -->
    <div class="dropdown-container">
      <Dropdown
        class="dropdown"
        v-model="selected"
        :options="options"
        optionLabel="text"
        placeholder="Select Algorithm"
      />
    </div>

    <!-- Other Controls -->
    <div class="controls">
      <Button
        rounded
        outlined
        size="large"
        icon="pi pi-play"
        @click="handleClick(selected)"
      />
      <Button
        rounded
        outlined
        size="large"
        :value="selected"
        icon="pi pi-replay"
        @click="$emit('new-array')"
      />
      <Button
        rounded
        outlined
        size="large"
        icon="pi pi-info"
        @click="toggleShowInfo"
      />
    </div>

    <!-- Description -->
    <Dialog
      modal
      :header="selected.text"
      v-model:visible="visible"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <Info :name="selected.value" />
    </Dialog>

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
      visible: false,
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
  methods: {
    toggleShowInfo() {
      this.visible = !this.visible;
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
.dropdown-container {
  margin-bottom: 8px;
}
.dropdown {
  width: 260px;
  text-align: left;
}
.mb-8 {
  margin-bottom: 8px;
}
.controls {
  width: 150px;
  display: flex;
  margin-top: 8px;
  align-items: center;
  justify-content: space-around;
}
.btn {
  min-width: 92px;
}
</style>
