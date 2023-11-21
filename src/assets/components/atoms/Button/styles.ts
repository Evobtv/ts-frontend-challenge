import styled, {css, keyframes } from 'styled-components';
import { BasicButtonProps  } from './types';
import theme from '../../../styles/themes/variables';

export const Button = styled.button<BasicButtonProps >`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 16.8px;
    background-color: ${theme.colors.gray[0]};
    color: ${theme.colors.gray[1]};
    transition: background-color 0.3s, color 0.3s;
    border: 2px solid ${theme.colors.gray[0]};

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

    &:hover {
        background-color: ${theme.colors.black};
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }

    ${(props) =>
        props.$variantstyle === 'secondary' &&
        css`
            background-color: ${theme.colors.white};
            color: ${theme.colors.gray[0]};

            &:hover {
                color: ${theme.colors.gray[1]};
            }
        `}
    
`;

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #007bff;
    width: 20px;
    height: 20px;
    animation: ${spin} 1s linear infinite;
    top: 50%;
    left: 50%;
`;

Button.defaultProps = {
    $variantstyle: 'primary'
};