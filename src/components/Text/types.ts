import { ButtonHTMLAttributes, CSSProperties } from 'react';

export type TextVariant = 'heading1' | 'heading2' | 'body1' | 'body2' | 'body3';

export interface TextProps {
  $weight?: number;
  $variant?: TextVariant;
  $align?: CSSProperties['textAlign'];
}

export interface TextComponentProps
  extends ButtonHTMLAttributes<HTMLParagraphElement>,
    TextProps {
  children: React.ReactNode;
  component?: keyof JSX.IntrinsicElements;
}
