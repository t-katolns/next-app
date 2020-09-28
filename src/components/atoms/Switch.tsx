import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Check = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  margin: 0;
  .toggle-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }
  .toggle-label {
    width: 40px;
    height: 20px;
    background: #ccc;
    position: relative;
    display: inline-block;
    border-radius: 46px;
    transition: 0.4s;
    box-sizing: border-box;
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      left: 0;
      top: 0;
      z-index: 2;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      transition: 0.4s;
    }
  }
  .toggle-input:checked {
    + .toggle-label {
      background-color: #0068b4;
      &:after {
        left: 20px;
      }
    }
  }
`;

export const Switch: FunctionComponent = () => {
  return (
    <Check>
      <input id="toggle" type="checkbox" className="toggle-input" />
      <label className="toggle-label" />
      <span></span>
    </Check>
  );
};
