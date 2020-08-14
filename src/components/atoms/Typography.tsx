import React, { FunctionComponent } from "react";
import styled from "styled-components";

type Value = "start" | "center" | "left" | "right";

const Text = styled.p<{
  weight: number;
  size: number;
  height: number;
  color: string;
  align: Value;
}>`
  font-family: Noto Sans CJK JP;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
`;
Text.defaultProps = {
  weight: 400,
  size: 14,
  height: 20,
};

type Props = {
  weight?: number;
  size?: number;
  height?: number;
  color?: string;
  align?: Value;
};

export const Typography: FunctionComponent<Props> = ({
  weight,
  size,
  height,
  color,
  align,
  children,
}) => {
  return (
    <Text
      weight={weight}
      size={size}
      height={height}
      color={color}
      align={align}
    >
      {children}
    </Text>
  );
};
