<script setup>
import Info from "./Info.vue";
import { ref, defineEmits } from "vue";
import BarSlider from "./BarSlider.vue";
import { useToast } from "primevue/usetoast";
import { MENU_OPTIONS, ALGORITHMS, DESCRIPTION_BPS } from "@/utils/constants";

// Hooks
const toast = useToast();

const visible = ref(false);
const options = ref(MENU_OPTIONS);
const selected = ref(MENU_OPTIONS[0]);
const emit = defineEmits([...Object.values(ALGORITHMS), "reset"]);

const toggleShowInfo = () => {
  visible.value = !visible.value;
};

const handleClick = (selected) => {
  const { value } = selected;
  value === ALGORITHMS.EMPTY ? createToast() : emit(value);
};

const createToast = () => {
  toast.add({
    life: 5000,
    summary: " ",
    severity: "info",
    detail: "Select an algorithm to sort the columns",
  });
};
</script>

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
      :breakpoints="DESCRIPTION_BPS"
    >
      <Info :name="selected.value" />
    </Dialog>

    <!-- Notifications -->
    <Toast />
  </div>
</template>

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
