import { MessageTextArea } from "components/molecules/TextArea/MessageTextArea";
import { EAchange } from "domain/type";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 8px;
  .send_button {
    width: 20px;
    .send {
      position: fixed;
      right: 28px;
      bottom: 126px;
    }
  }
`;

type Props = {
  message: string;
  isShowPreviewCard: (e: EAchange) => void;
  isShowTemplateCard: () => void;
};

export const MessageTextField: FunctionComponent<Props> = ({
  message,
  isShowPreviewCard,
  isShowTemplateCard,
}) => {
  return (
    <Section>
      <MessageTextArea
        text={message}
        placeholder={"メッセージを入力"}
        isShowPreviewCard={isShowPreviewCard}
        isShowTemplateCard={isShowTemplateCard}
      />
      <div className="send_button">
        <img className="send" src={message === "" ? "images/send.svg" : "images/send_blue.svg"} />
      </div>
    </Section>
  );
};
