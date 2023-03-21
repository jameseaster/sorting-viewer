// mouse.js
import { ref } from "vue";
import { INITIAL_BAR_COUNT } from "@/utils/constants";
// by convention, composable function names start with "use"
export function useBarCount() {
  // state encapsulated and managed by the composable
  const quantity = ref(INITIAL_BAR_COUNT);
  // a composable can update its managed state over time.
  const updateBarCount = (num: number) => (quantity.value = num);
  // expose managed state as return value
  return { quantity, updateBarCount };
}
