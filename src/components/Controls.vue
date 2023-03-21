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
        icon="pi pi-replay"
        @click="$emit('reset')"
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
      :breakpoints="constants.DESCRIPTION_BPS"
    >
      <Info :name="selected.value" />
    </Dialog>

    <!-- Notifications -->
    <Toast />
  </div>
</template>

<script setup lang="ts">
// Imports
import { ref } from "vue";
import Info from "@/components/Info.vue";
import { useToast } from "primevue/usetoast";
import * as constants from "@/utils/constants";
import type { MenuOption } from "@/utils/types";
import BarSlider from "@/components/BarSlider.vue";

// Hooks
const toast = useToast();

// State
const visible = ref(false);
const options = ref(constants.MENU_OPTIONS);
const selected = ref(constants.MENU_OPTIONS[0]);
const emit = defineEmits(constants.ALGO_EMITS);

// Toggle info
const toggleShowInfo = () => {
  visible.value = !visible.value;
};

// Fire selected algorithm
const handleClick = (selected: MenuOption) => {
  const { value } = selected;
  value === constants.ALGORITHMS.EMPTY ? createToast() : emit(value);
};

// Create toast notification
const createToast = () => {
  toast.add({
    life: 5000,
    summary: " ",
    severity: "info",
    detail: "Select an algorithm to sort the columns",
  });
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
