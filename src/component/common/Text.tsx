import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface TextProps {
  size?: string;
  children?: any;
}

const StyledText = styled.p<TextProps>`
  margin-bottom: 20px;
  ${({ size }) => {
    if (size === 'small') {
      return css`
        font-size: 16px;
      `;
    }
    if (size === 'medium') {
      return css`
        font-size: 18px;
      `;
    }
    if (size === 'large') {
      return css`
        font-size: 36px;
      `;
    }
    if (size === 'large-2') {
      return css`
        font-size: 40px;
        font-weight: bold;
      `;
    }
  }}
`;

export const Text: FC<TextProps> = ({ size, children }) => {
  return <StyledText size={size}>{children}</StyledText>;
};
