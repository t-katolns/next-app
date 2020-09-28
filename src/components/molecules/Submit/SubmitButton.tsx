import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type IButton = {
  background: string;
  color: string;
  marginl: number;
};

const Button = styled.button<IButton>`
  width: 134px;
  height: 24px;
  border-radius: 4px;
  border: none;
  background: ${({ background }: IButton) => background};
  color: ${({ color }: IButton) => color};
  margin-left: ${({ marginl }: IButton) => marginl}px;
`;

type Props = {
  text: string;
  background: string;
  color?: string;
  marginl?: number;
};

export const SubmitButton: FunctionComponent<Props> = ({
  text,
  background,
  color,
  marginl,
}) => {
  return (
    <Button background={background} color={color} marginl={marginl}>
      <p>{text}</p>
    </Button>
  );
};
