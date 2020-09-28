import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid gray;
`;

type Props = {
  placeholderText: string;
};

export const SubmitButton: FunctionComponent = ({ children }) => {
  return <Button>{children}</Button>;
};
