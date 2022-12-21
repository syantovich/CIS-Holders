export type DropDownOptionsProps<T> = {
  items: T[];
  isLoading: boolean;
  renderItem?: (item: T) => number | string;
  renderValue?: (item: T) => number | string;
  renderKey?: (item: T) => number | string;
  setValue: (item: T | string | number) => void;
};
