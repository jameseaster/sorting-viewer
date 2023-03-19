interface MenuOption {
  text: string;
  value: Algorithm;
  disabled?: boolean;
}

export enum Algorithm {
  EMPTY = "empty",
  BUBBLE = "bubble",
  INSERTION = "insertion",
  SELECTION = "selection",
  QUICK = "quick",
  HEAP = "heap",
  MERGE = "merge",
}

export const menuOptions: MenuOption[] = [
  { value: Algorithm.EMPTY, text: "Select An Algorithm", disabled: true },
  { value: Algorithm.BUBBLE, text: "Bubble Sort" },
  { value: Algorithm.INSERTION, text: "Insertion Sort" },
  { value: Algorithm.SELECTION, text: "Selection Sort" },
  { value: Algorithm.QUICK, text: "Quick Sort" },
  { value: Algorithm.HEAP, text: "Heap Sort" },
  { value: Algorithm.MERGE, text: "Merge Sort" },
];

export const algoInfo: { [key in Algorithm]: string } = {
  [Algorithm.EMPTY]: "Pick an algorithm from the dropdown menu!",

  [Algorithm.BUBBLE]: `Bubble sort gets its name because smaller elements
  bubble toward the top of their list. This algorithm compares
  two adjacent values. If the first one is larger than the
  second, then it will swap those two values. After repeating
  this process all of the way through the data set, the largest
  value will have been continually swapped to the very end,
  arriving in its final sorted position. This complete iteration
  is repeated the same number of times as there are values in the
  unsorted list.`,

  [Algorithm.INSERTION]: `Insertion sort works similarly to the way we organize
  cards in our hand when playing a card game. It compares a value
  with the one to its left and sorts them accordingly. Then it
  continues to the next unsorted value, keeping the collection of
  sorted values to one side and the unsorted values on the other.`,

  [Algorithm.SELECTION]: `Selection sort scans the collection and selects the
  smallest value and then moves it to the front of the collection.
  You will see the smallest flagged value turn gold and then moved
  to front, building up a sorted collection from left to right.`,

  [Algorithm.QUICK]: `Quick sort operates with a pivot and two pointers. In
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

  [Algorithm.HEAP]: `Heap sort utilizes the heap data structure. In fact, step
  one to this algorithm is creating a max heap out of the unsorted
  values. As a rule of thumb, a max heap always pushes the largest
  value to the top of its structure. Heap sort will take the value
  off of the top of the max heap and place it on the far right of
  the list. Then, the max heap will then reorganize itself by pushing
  the next biggest value to the top of its structure. This process
  is repeated until the max heap has handed off all of its values
  to the now sorted collection.`,

  [Algorithm.MERGE]: `Merge sort takes the approach of "divide and conquer." To
  start, it divides the collection in two. And then divides those
  collections in two, and continues to do this until it only contains
  collections that each contain one value. A collection with only
  one value is a sorted collection! At this point it starts to merge
  them back together comparing their values and sorting them accordingly.`,
};
