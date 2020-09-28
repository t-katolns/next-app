import { Label } from 'components/atoms/Label';
import { Typography } from 'components/atoms/Typography';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
`;
type Props = {
  ct: string;
  st: string;
};

export const CountLabel: FunctionComponent<Props> = ({ ct, st }) => {
  return (
    <Div>
      <Label weight={700} size={16} height={16}>
        20000
      </Label>
      <Typography>人を表示中</Typography>
    </Div>
  );
};
