import React, { FunctionComponent } from "react";
import styled from "styled-components";
const Input = styled.input<{ radius: number; color: string }>`
  border: 1px solid gray;
  border-radius: ${(props) => props.radius}px;
  background: ${(props) => props.color};
  border: none;
  outline: none;
`;

type Props = {
  placeholder: string;
  radius: number;
  color: string;
  className?: string;
};

export const TextField: FunctionComponent<Props> = ({
  placeholder,
  radius,
  color,
  className,
}) => {
  return (
    <Input
      placeholder={placeholder}
      radius={radius}
      color={color}
      className={className}
    />
  );
};
