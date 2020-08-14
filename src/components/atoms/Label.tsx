import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Text = styled.p<{
  weight: number;
  size: number;
  height: number;
  color: string;
}>`
  margin: 0;
  font-family: Noto Sans CJK JP;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.height}px;
  color: ${(props) => props.color};
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
  className?: string;
};

export const Label: FunctionComponent<Props> = ({
  weight,
  size,
  height,
  color,
  children,
  className,
}) => {
  return (
    <Text
      weight={weight}
      size={size}
      height={height}
      color={color}
      className={className}
    >
      {children}
    </Text>
  );
};
