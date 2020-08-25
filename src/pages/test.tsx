import { MainContainer } from "components/layouts/MainContainer";
import { Header } from "components/organisms/Header";
import Sidebar from "components/organisms/Sidebar";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
const SectionSearch = styled.section`
  position: relative;
  z-index: 2px;
  overflow-y: auto;
  padding: 24px 16px;
  border-right: 2px solid #e1e6ed;
  background: green;
`;

const SectionUsers = styled.section`
  position: relative;
  padding: 24px 10px;
  overflow-y: auto;
  border-right: 2px solid #e1e6ed;
  background: red;
`;

const SectionMessages = styled.section`
  padding: 24px;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 1fr auto;
  background: yellow;
`;

const User: FunctionComponent = () => {
  return (
    <>
      <Header pageName="検索"></Header>
      <Sidebar />
      <MainContainer>
        <SectionSearch></SectionSearch>
        <SectionUsers></SectionUsers>
        <SectionMessages></SectionMessages>
      </MainContainer>
    </>
  );
};

export default User;
