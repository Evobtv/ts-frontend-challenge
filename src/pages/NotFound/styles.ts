import styled from 'styled-components';

export const Link = styled.a`
  color: ${props => props.theme.colors.gray[500]};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.8rem;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.gray[100]};
  }
`;
