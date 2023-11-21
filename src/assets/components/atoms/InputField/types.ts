import { InputHTMLAttributes } from 'react';

export type IconVariant = 'user' | 'lock' | 'mail';


export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputConfig?: {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    icon: IconVariant; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
  };
  
}
