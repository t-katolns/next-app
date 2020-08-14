import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Div = styled.div`
  background: gray;
`;

type Props = {};

export const MessageBubbleBox: FunctionComponent<Props> = ({ children }) => {
  return <Div>{children}</Div>;
};
