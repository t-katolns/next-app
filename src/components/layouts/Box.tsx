import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Div = styled.div<{ mt: number; pt: number; pl: number }>`
  margin-top: ${(props: { mt: number }) => props.mt}px;
  padding-top: ${(props: { pt: number }) => props.pt}px;
  padding-left: ${(props: { pl: number }) => props.pl}px;
`;

type Props = {
  mt?: number;
  pt?: number;
  pl?: number;
  className?: string;
};

export const Box: FunctionComponent<Props> = ({ mt, pt, pl, className }) => {
  return <Div mt={mt} pt={pt} pl={pl} className={className}></Div>;
};
