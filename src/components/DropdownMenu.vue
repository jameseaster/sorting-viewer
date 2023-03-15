<template>
  <div>
    <!-- <b-form-select v-model="selected" :options="options"> </b-form-select> -->
    <Dropdown
      v-model="selected"
      :options="options"
      optionLabel="text"
      placeholder="Select Algorithm"
      class="w-full md:w-14rem"
    />

    <Button :value="selected" label="Go!" @click="handleClick(selected)" />
    <Button @click="$emit('new-array')" label="Reset" />
    <Button
      :label="showInfo ? 'Hide Info' : 'More Info'"
      @click="toggleShowInfo"
    />
    <Info :showInfo="showInfo" :name="selected.value" />
  </div>
</template>

<script>
import Info from "./Info.vue";

export default {
  name: "DropdownMenu",
  components: {
    Info,
  },
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
  methods: {
    toggleShowInfo() {
      this.showInfo = !this.showInfo;
    },
    handleClick: function (selected) {
      const { value } = selected;
      if (value === "toast") {
        this.toast();
      } else {
        this.$emit(value);
      }
    },
    toast: function () {
      this.$bvToast.toast(`Select an algorithm to sort the columns`, {
        autoHideDelay: 3000,
        variant: "light",
        toaster: "b-toaster-top-center",
        solid: true,
        className: ["toast"],
      });
    },
  },
};
</script>

<style scoped>
.option-button {
  min-width: 95px;
}
</style>
