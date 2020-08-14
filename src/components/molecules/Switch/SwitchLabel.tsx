import { Switch } from "components/atoms/Switch";
import { Typography } from "components/atoms/Typography";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;
export const SwitchLabel: FunctionComponent = () => {
  return (
    <Div>
      <Typography size={12}>現職以外も含めて検索</Typography>
      <Switch />
    </Div>
  );
};
