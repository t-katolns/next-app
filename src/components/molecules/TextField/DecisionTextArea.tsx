import { EAchange } from 'domain/type';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type TInput = {
  height: number;
  value: string;
};
const Input = styled.div<TInput>`
  padding: 9px 16px;
  height: ${({ height }: TInput) => height}px;
  background: #f6f7f9;
  border-radius: 4px;
  :focus-within {
    outline: none;
    .border {
      opacity: 1;
    }
  }
  .name {
    display: block;
    outline: none;
    position: relative;
    height: 2px;
    top: -2px;
    left: 2px;
    font-size: 12px;
    color: #0068b4;
    opacity: ${({ value }: TInput) => (value === '' ? 0 : 1)};
  }
  textarea {
    margin-top: 20px;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
  .border {
    opacity: 0;
    display: block;
    width: calc(100% + 30px);
    height: 2px;
    background-color: #0068b4;
    position: relative;
    right: 15px;
    top: 20px;
  }
`;

type Props = {
  height: number;
  placeholder: string;
  value: string;
  stateName: string;
  handleInputChange: (e: EAchange, key: string) => void;
};
export const DecisionTextArea: FunctionComponent<Props> = ({
  height,
  placeholder,
  value,
  stateName,
  handleInputChange,
}) => {
  return (
    <>
      <Input height={height} value={value} tabIndex={0}>
        <span className="name">{placeholder}</span>
        <textarea
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e, stateName)}
        ></textarea>
        <span className="border"></span>
      </Input>
    </>
  );
};
