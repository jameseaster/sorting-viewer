export interface Bar {
  value: number;
  color: string;
}

export interface MenuOption {
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
