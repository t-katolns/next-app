import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type fValue =
  | 'start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

const Div = styled.div<{ value: string }>`
  display: flex;
  justify-content: ${(props) => props.value};
`;

type Props = {
  justifyContent?: fValue;
  className?: string;
};

export const Flex: FunctionComponent<Props> = ({
  children,
  justifyContent,
  className,
}) => {
  return (
    <Div value={justifyContent} className={className}>
      {children}
    </Div>
  );
};
