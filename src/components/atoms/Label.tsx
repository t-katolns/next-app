import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Text = styled.div<{
  width: number;
  weight: number;
  size: number;
  height: number;
  color: string;
  background: string;
}>`
  margin: 0;
  font-family: Noto Sans CJK JP;
  width: ${(props) => props.width}px;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
`;

Text.defaultProps = {
  weight: 400,
  size: 12,
  height: 20,
};

type Props = {
  weight?: number;
  size?: number;
  height?: number;
  color?: string;
  background?: string;
  width?: number;
  className?: string;
};

export const Label: FunctionComponent<Props> = ({
  weight,
  size,
  height,
  color,
  background,
  width,
  children,
  className,
}) => {
  return (
    <Text
      weight={weight}
      size={size}
      height={height}
      color={color}
      background={background}
      width={width}
      className={className}
    >
      {children}
    </Text>
  );
};
