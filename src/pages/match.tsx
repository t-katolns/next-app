import { MatchContainer } from "components/layouts/MatchContainer";
import { DecisionModal } from "components/molecules/Modal/DecisionModal";
import { Header } from "components/organisms/Header";
import Sidebar from "components/organisms/Sidebar";
import { MessageContents } from "containers/MessageContents";
import { UserList } from "containers/UserList";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import UsersList from "user.json";
const SectionSearch = styled.section`
  overflow-y: auto;
  padding: 24px 16px;
  border-right: 2px solid #e1e6ed;
`;

const SectionContainer = styled.section`
  border-right: 2px solid #e1e6ed;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Match: FunctionComponent = () => {
  return (
    <>
      <Header pageName={"マッチング"}></Header>
      <Sidebar></Sidebar>
      <DecisionModal
        url={"images/test.jpg"}
        name={"あああ　あああ"}
      ></DecisionModal>
      <MatchContainer>
        <SectionSearch>
          <UserList usersList={UsersList}></UserList>
        </SectionSearch>
        <SectionContainer>
          <MessageContents
            name={"あああああああ"}
            job={"エンジニア"}
            company={"株式会社AAA"}
            area={"Minato-ku, Tokyo, japan"}
            reviewCount={16}
            statuse={"一週間前にログイン"}
            purpose={"読書、映画鑑賞、スポーツ観戦"}
            img={"/images/test.jpg"}
          />
        </SectionContainer>
      </MatchContainer>
    </>
  );
};

export default Match;
