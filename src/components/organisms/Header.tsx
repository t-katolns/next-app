import React, { FunctionComponent } from "react";
import styled from "styled-components";

const HeadLayout = styled.header`
  width: 100%;
  background: #0000cd;
  box-shadow: 0px 1px 0px #e1e6ed;
  font-family: Noto Sans CJK JP;
  font-size: 20px;
  line-height: 30px;
  .head-text {
    padding-left: 66px;
    padding-top: 14px;
    z-index: 1;
  }
`;
type Props = {
  pageName?: string;
};

export const Header: FunctionComponent<Props> = ({ pageName }) => {
  return (
    <HeadLayout>
      <div className="head-text">{pageName}</div>
    </HeadLayout>
  );
};
