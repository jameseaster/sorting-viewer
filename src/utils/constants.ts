import type { MenuOption } from "./types";

/**
 * App title
 */
export const TITLE = "Sorting Viewer";

/**
 * Number of bars to initialize app with
 */
export const INITIAL_BAR_COUNT = 25;

/**
 * PrimeVue app themes
 */
export const THEMES: { [key: string]: { [key: string]: string } } = {
  DARK: {
    name: "dark",
    icon: "pi pi-sun",
    file: "bootstrap4-dark-blue",
  },
  LIGHT: {
    name: "light",
    icon: "pi pi-moon",
    file: "bootstrap4-light-blue",
  },
};

/**
 * Breakpoints for algorithm description
 */
export const DESCRIPTION_BPS: { [key: string]: string } = {
  "960px": "75vw",
  "641px": "100vw",
};

/**
 * Algorithm names to use throught app
 */
export const ANIMATION_ACTION: { [key: string]: string } = {
  COMPARE: "compare",
  OVERWRITE: "overwrite",
};

/**
 * Algorithm names to use throught app
 */
export const ALGORITHMS: { [key: string]: string } = {
  EMPTY: "empty",
  HEAP: "heap",
  QUICK: "quick",
  MERGE: "merge",
  BUBBLE: "bubble",
  INSERTION: "insertion",
  SELECTION: "selection",
};

/**
 * Event names to emit from controls component
 */
export const ALGO_EMITS: string[] = [
  ALGORITHMS.EMPTY,
  ALGORITHMS.HEAP,
  ALGORITHMS.QUICK,
  ALGORITHMS.MERGE,
  ALGORITHMS.BUBBLE,
  ALGORITHMS.INSERTION,
  ALGORITHMS.SELECTION,
  "reset",
];

/**
 * App theme colors
 */
export const COLORS: { [key: string]: string } = {
  // MAIN
  PRIMARY: "var(--primary-color)",
  COMPARE: "var(--teal-500)",
  SORTED: "var(--purple-400)",
  PRIMARY_LIGHT: "var(--primary-200)",
  BG_COLOR: "var(--surface-a)",
  // OTHERS
  PINK: "var(--pink-300)",
  RED: "var(--red-300)",
  ORANGE: "var(--orange-300)",
  YELLOW: "var(--yellow-300)",
  GREEN: "var(--green-200)",
  BLUE: "var(--blue-300)",
  CYAN: "var(--cyan-400)",
  INDIGO: "var(--indigo-200)",
  GRAY: "var(--bluegray-600)",
  TEAL: "var(--teal-200)",
};

/**
 * Specific order of colors applied to heap sort levels
 */
export const HEAP_COLOR_LEVELS: { [key: number]: string } = {
  1: COLORS.PINK,
  2: COLORS.RED,
  3: COLORS.ORANGE,
  4: COLORS.YELLOW,
  5: COLORS.GREEN,
  6: COLORS.BLUE,
  7: COLORS.CYAN,
  8: COLORS.INDIGO,
  9: COLORS.GRAY,
  10: COLORS.TEAL,
};

/**
 * Order of dropdown menu options, algorithms for users to select
 */
export const MENU_OPTIONS: MenuOption[] = [
  { value: ALGORITHMS.EMPTY, text: "Select An Algorithm", disabled: true },
  { value: ALGORITHMS.BUBBLE, text: "Bubble Sort" },
  { value: ALGORITHMS.INSERTION, text: "Insertion Sort" },
  { value: ALGORITHMS.SELECTION, text: "Selection Sort" },
  { value: ALGORITHMS.QUICK, text: "Quick Sort" },
  { value: ALGORITHMS.HEAP, text: "Heap Sort" },
  { value: ALGORITHMS.MERGE, text: "Merge Sort" },
];

/**
 * Info about each algorithm displayed when info icon is clicked
 */
export const ALGO_INFO: { [key: string]: string } = {
  [ALGORITHMS.EMPTY]: "Pick an algorithm from the dropdown menu!",

  [ALGORITHMS.BUBBLE]: `Bubble sort gets its name because smaller elements
  bubble toward the top of their list. This algorithm compares
  two adjacent values. If the first one is larger than the
  second, then it will swap those two values. After repeating
  this process all of the way through the data set, the largest
  value will have been continually swapped to the very end,
  arriving in its final sorted position. This complete iteration
  is repeated the same number of times as there are values in the
  unsorted list.`,

  [ALGORITHMS.INSERTION]: `Insertion sort works similarly to the way we organize
  cards in our hand when playing a card game. It compares a value
  with the one to its left and sorts them accordingly. Then it
  continues to the next unsorted value, keeping the collection of
  sorted values to one side and the unsorted values on the other.`,

  [ALGORITHMS.SELECTION]: `Selection sort scans the collection and selects the
  smallest value and then moves it to the front of the collection.
  You will see the smallest flagged value turn gold and then moved
  to front, building up a sorted collection from left to right.`,

  [ALGORITHMS.QUICK]: `Quick sort operates with a pivot and two pointers. In
  this app the pivot is colored gold and starts as the value on
  the far left of the collection. The pointers are green and move
  inward. Quick sort compares the values of the two pointers to the
  pivot. If the pointer on the left is smaller than the pivot then
  it moves inward to the next value. Similarly if the pointer on the
  right is larger than the pivot it moves inwardly. However, if the
  pointer on the left is larger than the pivot, and the pointer on
  the right is smaller than the pivot, the two pointers will swap
  values. Eventually the pointers meet in the middle which becomes
  the pivot's final sorted position. This algorithm then repeats on
  either side of the pivot recursively. It very quickly, efficiently,
  and recursively sorts a collection.`,

  [ALGORITHMS.HEAP]: `Heap sort utilizes the heap data structure. In fact, step
  one to this algorithm is creating a max heap out of the unsorted
  values. As a rule of thumb, a max heap always pushes the largest
  value to the top of its structure. Heap sort will take the value
  off of the top of the max heap and place it on the far right of
  the list. Then, the max heap will then reorganize itself by pushing
  the next biggest value to the top of its structure. This process
  is repeated until the max heap has handed off all of its values
  to the now sorted collection.`,

  [ALGORITHMS.MERGE]: `Merge sort takes the approach of "divide and conquer." To
  start, it divides the collection in two. And then divides those
  collections in two, and continues to do this until it only contains
  collections that each contain one value. A collection with only
  one value is a sorted collection! At this point it starts to merge
  them back together comparing their values and sorting them accordingly.`,
};
