import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

export type ErrorWrapperProps = {
  label?: string;
  children: ReactNode;
  error?: FieldError | boolean;
  message?: string;
};
