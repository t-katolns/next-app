import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const RoundedIconStyle = styled.figure<{
  size: number;
  theme: number;
}>`
  margin: 0px;
  width: ${(props: { size: number }) => props.size}px;
  height: ${(props: { size: number }) => props.size}px;
  overflow: hidden;
  border-radius: 50%;
  grid-column: ${({ theme }) => theme.column};
  grid-row: ${({ theme }) => theme.row};
  img {
    width: ${(props: { size: number }) => props.size}px;
    height: ${(props: { size: number }) => props.size}px;
    object-fit: cover;
  }
`;

export const RoundedIcon: FunctionComponent<{
  size?: number;
  url: string;
  theme?: any;
}> = ({ url, size, theme }) => {
  return (
    <RoundedIconStyle size={size} theme={theme}>
      <img src={url} />
    </RoundedIconStyle>
  );
};
