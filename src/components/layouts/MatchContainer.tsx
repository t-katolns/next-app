import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  padding-left: 50px;
  display: grid;
  grid-template-columns: minmax(160px, 400px) 1fr;
  overflow: hidden;
`;

export const MatchContainer: FunctionComponent = ({ children }) => {
  return <Main>{children}</Main>;
};
