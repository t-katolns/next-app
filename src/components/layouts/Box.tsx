import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Div = styled.div<{ mb: number; pt: number; pl: number }>`
  margin-bottom: ${(props: { mb: number }) => props.mb}px;
  padding-top: ${(props: { pt: number }) => props.pt}px;
  padding-left: ${(props: { pl: number }) => props.pl}px;
`;

type Props = {
  mb?: number;
  pt?: number;
  pl?: number;
  className?: string;
};

export const Box: FunctionComponent<Props> = ({ mb, pt, pl, className }) => {
  return <Div mb={mb} pt={pt} pl={pl} className={className}></Div>;
};
