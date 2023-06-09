// Imports
import { ref, onMounted } from "vue";
import type { Bar } from "@/utils/types";
import { COLORS, INITIAL_BAR_COUNT } from "@/utils/constants";

// Global State
const lastAlgo = ref("");
const bars = ref<Bar[]>([]);
const isSorting = ref(false);
const quantity = ref(INITIAL_BAR_COUNT);

/**
 * Composable that returns functions to update "global" bar variables
 */
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
      bars.value.push({ value, color: COLORS.PRIMARY });
    }
    isSorting.value = false;
  };

  // Create initial list of bars
  onMounted(() => createNewBarList());

  // expose managed state as return value
  return {
    bars,
    lastAlgo,
    quantity,
    isSorting,
    updateBarCount,
    createNewBarList,
  };
}
