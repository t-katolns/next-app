import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type TAlign = 'start' | 'center' | 'left' | 'right';
type TDispaly = 'inline-block';

const Text = styled.p<{
  display: TDispaly;
  weight: number;
  size: number;
  height: number;
  color: string;
  align: TAlign;
  pl: number;
  pr: number;
}>`
  display: ${(props) => props.display};
  font-family: Noto Sans CJK JP;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.height}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
`;
Text.defaultProps = {
  weight: 400,
  size: 14,
};

type Props = {
  display?: TDispaly;
  weight?: number;
  size?: number;
  height?: number;
  color?: string;
  align?: TAlign;
  pl?: number;
  pr?: number;
  className?: string;
};

export const Typography: FunctionComponent<Props> = ({
  display,
  weight,
  size,
  height,
  color,
  align,
  children,
  pl,
  pr,
  className,
}) => {
  return (
    <Text
      display={display}
      weight={weight}
      size={size}
      height={height}
      color={color}
      align={align}
      pl={pl}
      pr={pr}
      className={className}
    >
      {children}
    </Text>
  );
};
