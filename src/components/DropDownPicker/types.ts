export type DropPickerProps<T> = {
  items: T[];
  isLoading: boolean;
  renderItem?: (item: T) => number | string;
  renderValue?: (item: T) => number | string;
  renderKey?: (item: T) => number | string;
  title?: string;
  helpedText?: string;
};
