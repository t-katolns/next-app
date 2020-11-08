import React, { FunctionComponent } from "react";
import styled from "styled-components";

type TButton = {
  width: number;
  height: number;
  disabled: boolean;
};

const ButtonStyle = styled.div<TButton>`
  width: ${({ width }: TButton) => width}px;
  height: ${({ height }: TButton) => height}px;
  background: #c7ced7;
  border-radius: 8px;
  color: #ffffff;
  background: ${({ disabled }: TButton) => (disabled ? "blue" : "#C7CED7")};
  text-align: center;
  line-height: 48px;
`;

type Props = {
  width: number;
  height: number;
  onClick: () => void;
  disabled: boolean;
};

export const Button: FunctionComponent<Props> = ({
  width,
  height,
  onClick,
  disabled,
  children,
}) => {
  return (
    <ButtonStyle width={width} height={height} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};
