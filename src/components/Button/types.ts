import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  $variant?: ButtonVariant;
  $fullWidth?: boolean;
}

export interface ButtonComponentProps
  extends ButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}
