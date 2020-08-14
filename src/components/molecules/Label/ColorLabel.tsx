import { Label } from "components/atoms/Label";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const LabelStyle = styled(Label)<{
  background: string;
  width: number;
}>`
  width: ${(props) => props.width}px;
  padding-left: 8px;
  height: 20px;
  border-radius: 50px;
  background: ${(props) => props.background};
  grid-auto-columns: max-content;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
`;

type Props = {
  width?: number;
  background: string;
  color?: string;
};

export const ColorLabel: FunctionComponent<Props> = ({
  width,
  background,
  color,
  children,
}) => {
  return (
    <LabelStyle
      size={11}
      weight={500}
      height={16}
      width={width}
      background={background}
      color={color}
    >
      {children}
    </LabelStyle>
  );
};
