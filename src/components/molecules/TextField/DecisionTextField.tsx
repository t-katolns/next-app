import { EIchange } from 'domain/type';
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
    top: -5px;
    left: 2px;
    font-size: 11px;
    color: #0068b4;
    opacity: ${({ value }: TInput) => (value === '' ? 0 : 1)};
  }
  input {
    margin-top: 12px;
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
    right: 16px;
    top: 14px;
  }
`;

type Props = {
  height: number;
  placeholder: string;
  value: string;
  stateName: string;
  handleInputCahnge: (e: EIchange, key: string) => void;
};
export const DecisionTextField: FunctionComponent<Props> = ({
  height,
  placeholder,
  value,
  stateName,
  handleInputCahnge,
}) => {
  return (
    <>
      <Input height={height} value={value} tabIndex={0}>
        <span className="name">{placeholder}</span>
        <input
          placeholder={placeholder}
          onChange={(e) => handleInputCahnge(e, stateName)}
        ></input>
        <span className="border"></span>
      </Input>
    </>
  );
};
