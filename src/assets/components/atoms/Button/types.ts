import { ButtonHTMLAttributes, ReactNode } from 'react';

export type VariantType = 'primary' | 'secondary';

export interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variantstyle?: VariantType;
  loading?: boolean;
  children?: ReactNode;
}