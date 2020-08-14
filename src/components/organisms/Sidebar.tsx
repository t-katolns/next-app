import React, { FunctionComponent } from "react";
import styled from "styled-components";
// import Logo from "./Logo";
const SidebarStyle = styled.nav`
  position: fixed;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 100vh;
  background: #0000cd;
  box-shadow: 1px 0px 0px #e1e6ed;
  z-index: 1;
  :hover {
    width: 175px;
    ul {
      margin-left: 10px;
      align-items: flex-start;
    }
    span {
      display: inline;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0px;
  padding: 10px;
  margin-top: 90px;
`;

const List = styled.li`
  height: 50px;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0.06em;
  padding-top: 20px;
  :hover {
    transform: scale(1);
    font-weight: bold;
  }
  span {
    display: none;
  }
`;

export const Sidebar: FunctionComponent = () => {
  return (
    <SidebarStyle>
      {/* <Logo /> */}
      <Menu>
        <List>
          <img src="/images/navbar/scout.svg" />
          <span>メッセージ</span>
        </List>
        <List>
          <img src="/images/navbar/matching.svg" />
          <span>マッチング</span>
        </List>
        <List>
          <img src="/images/navbar/vector.svg" />
          <span>プロフィール</span>
        </List>
      </Menu>
    </SidebarStyle>
  );
};

export default Sidebar;
