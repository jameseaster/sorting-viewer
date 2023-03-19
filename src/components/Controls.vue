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

// TODO: UPDATE TO SETUP TAG
<script>
import { ref } from "vue";
import Info from "./Info.vue";
import BarSlider from "./BarSlider.vue";
import { useToast } from "primevue/usetoast";
import { menuOptions, Algorithm } from "../utils/constants";

export default {
  name: "Controls",
  components: { Info, BarSlider },
  setup() {
    // Hooks
    const toast = useToast();

    // Constants
    const visible = ref(false);
    const options = ref(menuOptions);
    const selected = ref(menuOptions[0]);

    // Event handlers
    const toggleShowInfo = () => {
      visible.value = !visible.value;
    };

    const createToast = () => {
      toast.add({
        life: 5000,
        summary: " ",
        severity: "info",
        detail: "Select an algorithm to sort the columns",
      });
    };

    return {
      visible,
      options,
      selected,
      createToast,
      toggleShowInfo,
    };
  },

  // TODO: UPDATE TO SETUP TAG
  methods: {
    handleClick: function (selected) {
      const { value } = selected;
      value === Algorithm.EMPTY ? this.createToast() : this.$emit(value);
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
