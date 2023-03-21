import { ref, onMounted } from "vue";
import type { Bar } from "@/utils/types";
import { COLORS, INITIAL_BAR_COUNT } from "@/utils/constants";

// Global State
const lastAlgo = ref("");
const bars = ref<Bar[]>([]);
const quantity = ref(INITIAL_BAR_COUNT);

export function useBarCount() {
  // Updates the quantity and repopulates bar list
  const updateBarCount = (num: number) => {
    quantity.value = num;
    createNewBarList();
  };

  // Generate new list of random bars
  const createNewBarList = () => {
    lastAlgo.value = "";
    bars.value = [];
    for (let i = 0; i < quantity.value; i++) {
      let value = Math.round(Math.random() * 280) + 20;
      let color = COLORS.PRIMARY;
      bars.value.push({ value, color });
    }
  };

  // Create initial list of bars
  onMounted(() => createNewBarList());

  // expose managed state as return value
  return { createNewBarList, bars, lastAlgo, quantity, updateBarCount };
}
