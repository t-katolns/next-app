import { EAchange } from 'domain/type';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type TArea = {
  parent: number;
  texth: number;
};
const TextArea = styled.div<TArea>`
  padding: 12px 12px;
  height: 25px;
  background: #e1e6ed;
  border-radius: 24px;
  min-height: ${({ parent }: TArea) => (parent <= 208 ? parent : 208)}px;
  textarea {
    margin-left: 10px;
    margin-bottom: 1px;
    width: calc(100% - 39px);
    font-size: 14px;
    max-height: 198px;
    height: ${({ texth }: TArea) => texth}px;
  }
`;

type Props = {
  text: string;
  placeholder: string;
  isShowPreviewCard?: (e: EAchange) => void;
  isShowTemplateCard: () => void;
};

export const MessageTextArea: FunctionComponent<Props> = ({
  text,
  placeholder,
  isShowPreviewCard,
  isShowTemplateCard,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}`);
  }, [text]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto');
    setParentHeight(`${textAreaRef.current!.scrollHeight}`);
    isShowPreviewCard(e);
  };

  return (
    <TextArea parent={Number(parentHeight)} texth={Number(textAreaHeight)}>
      <img src="images/template.svg" onClick={isShowTemplateCard} />
      <textarea
        placeholder={placeholder}
        ref={textAreaRef}
        rows={1}
        onChange={onChangeHandler}
        value={text}
      />
    </TextArea>
  );
};
