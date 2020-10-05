import { Switch } from "components/atoms/Switch";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Div = styled.div`
  align-items: left;
`;
export const SwitchLabel: FunctionComponent = () => {
  return (
    <Div>
      <Switch />
    </Div>
  );
};
