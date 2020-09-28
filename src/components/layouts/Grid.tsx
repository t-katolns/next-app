import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Div = styled.div<{
  height: number;
  columnSpacing: number;
  rowSpacing: number;
}>`
  display: grid;
  height: ${(props) => props.height}px;
  grid-row-gap: ${(props) => props.rowSpacing}px;
  grid-column-gap: ${(props) => props.columnSpacing}px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

type Props = {
  height?: number;
  columnSpacing?: number;
  rowSpacing?: number;
};

export const Grid: FunctionComponent<Props> = ({
  height,
  columnSpacing,
  rowSpacing,
  children,
}) => {
  return (
    <Div height={height} columnSpacing={columnSpacing} rowSpacing={rowSpacing}>
      {children}
    </Div>
  );
};
