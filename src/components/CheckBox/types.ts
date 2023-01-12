import { ReactNode } from 'react';

export type CheckBoxProps = {
  children?: ReactNode;
  action?: () => void;
  isChecked?: boolean;
  isStrict?: boolean;
};
