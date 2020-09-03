import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
`;

type TSelectBox = {
  active: boolean;
  month: number;
};
const SelectBox = styled.div<TSelectBox>`
  display: flex;
  width: 136px;
  flex-direction: column;
  font-size: 16px;
  color: #a3afbf;
  .option-container {
    font-size: 14px;
    box-shadow: 0px 1px 4px rgba(109, 123, 143, 0.12),
      0px 4px 24px rgba(109, 123, 143, 0.25);
    color: rgba(0, 0, 0, 0.87);
    width: 100%;
    max-height: 0;
    opacity: 0;
    transition: all 0.2s;
    border-radius: 4px;
    overflow: hidden;
    order: 1;
    text-align: center;
    ::-webkit-scrollbar {
      width: 3px;
      background: #d3d6db;
      border-radius: 0 4px 4px 0;
    }
    ::-webkit-scrollbar-thumb {
      background: #66b7f2;
      border-radius: 0 4px 4px 0;
    }
    ${({ active }: TSelectBox) =>
      active &&
      `
    max-height: 150px;
    opacity: 1;
    overflow-y: scroll;
  `}
  }
  .option,
  .selected {
    padding: 12px 15px;
    cursor: pointer;
  }
  .option:hover {
    background: #dadee6;
  }
  .label {
    cursor: pointer;
  }
  .radio {
    display: none;
  }
  .holder {
    opacity: ${({ active }: TSelectBox) => (active ? 1 : 0)};
    font-size: 8px;
    position: relative;
    top: -10px;
    color: #0068b4;
  }
  .select-name {
    opacity: ${({ active }: TSelectBox) => (active ? 0 : 1)};
  }
  .selected {
    background: #f6f7f9;
    border-radius: 8px;
    margin-bottom: 8px;
    position: relative;
    order: 0;
    p {
      display: inline-block;
      color: ${({ month }: TSelectBox) =>
        month ? "rgba(0, 0, 0, 0.87)" : "#A3AFBF"};
      font-size: 16px;
    }
  }
  .selected::after {
    content: "";
    background: ${({ active }: TSelectBox) =>
      `url("images/arrow_${active ? "up" : "down"}.svg");`};
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 30px;
    position: absolute;
    height: 100%;
    width: 15px;
    top: 18px;
    right: 10px;
    transition: all 0.4s;
    .select-name {
      opacity: 0;
    }
  }
`;

export const Select: FunctionComponent = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [active, setActive] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);

  const handleActive = () => {
    setActive(!active);
  };

  const handleSelectingOption = (month: number) => {
    setSelectedMonth(month);
    setActive(false);
  };

  return (
    <Container>
      <SelectBox active={active} month={selectedMonth}>
        <div className="option-container">
          {months.map((month, i) => (
            <div
              className="option"
              key={i}
              onClick={() => handleSelectingOption(month)}
            >
              <label htmlFor="automobiles">
                <p className="name">{month}月</p>
              </label>
            </div>
          ))}
        </div>
        <div className="selected" onClick={handleActive}>
          <span className="holder">月</span>
          <p className="select-name">{selectedMonth || ""}月</p>
        </div>
      </SelectBox>
    </Container>
  );
};

export default Select;
