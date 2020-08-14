import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { SubmitButton } from "./SubmitButton";
import { TextField } from "./TextField";

const Section = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 8px;
`;
const TextFieldStyle = styled(TextField)`
  padding-left: 16px;
  height: 40px;
`;

type Props = {};

export const MessageTextField: FunctionComponent<Props> = ({}) => {
  return (
    <Section>
      <TextFieldStyle
        placeholder={"スカウトメッセージを入力"}
        radius={24}
        color={"#E1E6ED"}
      />
      <SubmitButton>{"send"}</SubmitButton>
    </Section>
  );
};
