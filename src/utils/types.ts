export type Animations = (Overwrite | Compare)[];

export interface Bar {
  value: number;
  color: string;
}

export interface MenuOption {
  text: string;
  value: string;
  disabled?: boolean;
}

export interface Overwrite {
  idx1: number;
  value: number;
  action: string;
}

export interface Compare {
  idx1: number;
  idx2: number;
  action: "compare";
}
