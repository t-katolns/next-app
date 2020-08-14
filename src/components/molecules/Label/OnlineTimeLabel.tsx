import { Label } from "components/atoms/Label";
import { Flex } from "components/layouts/Flex";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 8px;
  height: 8px;
  background: "#4CAF6D";
  border-radius: 50%;
`;

type Props = {
  time: string;
};
export const OnlineTimeLabel: FunctionComponent<Props> = ({ time }) => {
  return (
    <Flex>
      <Circle></Circle>
      <Label>{time}</Label>
    </Flex>
  );
};
