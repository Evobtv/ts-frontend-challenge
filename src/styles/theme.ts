// src/styles/theme.ts
import { css } from 'styled-components';
import { Theme } from '../types/globals';

export const colors = {
  darkGray: '#4A5568',
  baseGray: '#2d3748',
  lightGray: '#a0aec0',
  semiGray: '#efefef',
  baseMessage: '#333',
  white: '#fff',
  erroMessage: '#F56565'
};

export const buttonStyles = {
  base: css`
    display: block;
    padding: 10px 2rem;
    font-size: 1.25rem;
    cursor: pointer;
    transition: 250ms ease-out;

    @media screen and (min-width: 728px) {
      width: initial;
    }
  `,
  transparent: css`
    border: 2px solid ${colors.baseGray};
    background-color: transparent;
    color: ${colors.baseGray};

    &:hover,
    &:focus {
      background-color: ${colors.baseGray};
      color: ${colors.white};
      border: 2px solid ${colors.baseGray};
    }
  `,
  solid: css`
    width: 50%;
    background-color: ${colors.baseGray};
    border: 1px solid transparent;
    color: ${colors.white};

    &:hover {
      color: ${colors.baseGray};
      background-color: ${colors.white};
      border: 1px solid ${colors.baseGray};
    }
  `,
};

export const theme: Theme = {
  colors,
  buttonStyles,
};