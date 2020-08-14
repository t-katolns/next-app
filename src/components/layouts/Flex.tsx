import React, { FunctionComponent } from "react";
import styled from "styled-components";

type fValue =
  | "start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

const Div = styled.div<{ value: string }>`
  display: flex;
  justify-content: ${(props) => props.value};
`;

type Props = {
  justifyContent?: fValue;
};

export const Flex: FunctionComponent<Props> = ({
  children,
  justifyContent,
}) => {
  return <Div value={justifyContent}>{children}</Div>;
};
