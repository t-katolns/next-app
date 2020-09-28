import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #0068b4;
  border-radius: 4px;
  width: 131px;
  height: 32px;
  p {
    color: #ffffff;
  }
  :hover {
    background: #1985d4;
  }
`;

type Props = {
  isModalOpen: () => void;
};

export const DecisionReportButton: FunctionComponent<Props> = ({
  isModalOpen,
}) => {
  return (
    <Button onClick={isModalOpen}>
      <p>採用決定報告</p>
    </Button>
  );
};
