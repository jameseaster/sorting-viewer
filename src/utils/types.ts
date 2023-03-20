export interface Bar {
  value: number;
  color: string;
}

export interface MenuOption {
  text: string;
  value: string;
  disabled?: boolean;
}

export interface Animation {
  idx1: number;
  idx2?: number;
  value?: number;
  action: string;
}
