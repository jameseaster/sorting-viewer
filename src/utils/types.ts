export interface Bar {
  value: number;
  color: string;
}

export interface MenuOption {
  text: string;
  value: Algorithm;
  disabled?: boolean;
}

export interface Animation {
  idx1: number;
  idx2?: number;
  value?: number;
  action: string;
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

export enum Colors {
  // MAIN
  PRIMARY = "var(--primary-color)",
  COMPARE = "var(--teal-500)",
  SORTED = "var(--purple-400)",
  PRIMARY_LIGHT = "var(--primary-200)",

  // OTHERS
  PINK = "var(--pink-300)",
  RED = "var(--red-300)",
  ORANGE = "var(--orange-300)",
  YELLOW = "var(--yellow-300)",
  GREEN = "var(--green-200)",
  BLUE = "var(--blue-300)",
  CYAN = "var(--cyan-400)",
  INDIGO = "var(--indigo-200)",
  GRAY = "var(--bluegray-600)",
  TEAL = "var(--teal-200)",
}
