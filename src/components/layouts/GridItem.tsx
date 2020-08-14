import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Item = styled.div<{ theme: any }>`
  display: inline-block;
  grid-column: ${({ theme }) => theme.column};
  grid-row: ${({ theme }) => theme.row};
`;
type Props = {
  theme: any;
};

export const GridItem: FunctionComponent<Props> = ({ theme, children }) => {
  return <Item theme={theme}>{children}</Item>;
};
