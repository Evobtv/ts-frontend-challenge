import { DefaultTheme } from 'styled-components';

export interface childrenProps {
  children: React.ReactNode;
}

export interface typeErrorMessageProps {
  typeErrorMessage: string;
}

export interface Theme extends DefaultTheme {
  colors: typeof colors;
  buttonStyles: typeof buttonStyles;
}

export type LoginFormProps = {
  title: string;
  forgot: string;
  register: string;
  registerCall: string;
  loginCall: string;
  setIsRegisterVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPasswordResetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export type InputComponentProps = {
  value: string;
  typeErrorMessage?: string;
  type: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onInvalid: (e: InvalidEvent<HTMLInputElement>) => void;
}

export type BannerProps = {
  subtitle: string;
  slogan: string;
  callAction: string;
  logoDesktop: string;
  logoMobile: string;
};

export type ButtonProps = {
  variant?: 'solid' | 'transparent' | 'filter';
  width?: '50%' | '100%';
};

export type IconProps = {
  color?: string;
  d?: string;
};

export type InputContainerComponentProps = {
  children: React.ReactNode;
  typeErrorMessage: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type LoginResults = {
  success: boolean;
  message: string;
};

export type NewUserFormProps = {
  setIsRegisterVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UnderConstructionProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ErrorMessage = {
  fillAllFields: string;
  passwordsDontMatch: string;
  userRegistered: string;
};

export type ErrorMsg = {
  valueMissing: string;
  typeMismatch: string;
  tooShort: string;
  tooLong: string;
};
