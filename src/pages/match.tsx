import { MatchContainer } from "components/layouts/MatchContainer";
import { Header } from "components/organisms/Header";
import Sidebar from "components/organisms/Sidebar";
import { MessageContents } from "containers/MessageContents";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
const SectionSearch = styled.section`
  overflow-y: auto;
  padding: 24px 16px;
  border-right: 2px solid #e1e6ed;
`;

const SectionContainer = styled.section`
  border-right: 2px solid #e1e6ed;
`;

const Match: FunctionComponent = () => {
  return (
    <>
      <Header pageName={"マッチング"}></Header>
      <Sidebar></Sidebar>
      <MatchContainer>
        <SectionSearch></SectionSearch>
        <SectionContainer>
          <MessageContents />
        </SectionContainer>
      </MatchContainer>
    </>
  );
};

export default Match;
