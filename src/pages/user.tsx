import { MainContainer } from "components/layouts/MainContainer";
import { Header } from "components/organisms/Header";
import Sidebar from "components/organisms/Sidebar";
import { MessageBox } from "containers/MessageBox";
import { SearchList } from "containers/SearchList";
import { UserList } from "containers/UserList";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import UsersList from "user.json";
import { PreviewCard } from "../components/molecules/Card/PreviewCard";
const SectionSearch = styled.section`
  position: relative;
  z-index: 2px;
  overflow-y: auto;
  padding: 24px 16px;
  border-right: 2px solid #e1e6ed;
`;

const SectionUsers = styled.section`
  position: relative;
  padding: 24px 10px;
  overflow-y: auto;
  border-right: 2px solid #e1e6ed;
`;

const SectionMessages = styled.section`
  padding: 24px;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const User: FunctionComponent = () => {
  return (
    <>
      <Header pageName="検索"></Header>
      <Sidebar />
      <MainContainer>
        <PreviewCard
          name={"Yuto Takashima"}
          age={25}
          company={"株式会社AAA"}
          job={"エンジニア"}
        />
        <SectionSearch>
          <SearchList></SearchList>
        </SectionSearch>
        <SectionUsers>
          <UserList usersList={UsersList}></UserList>
        </SectionUsers>
        <SectionMessages>
          <MessageBox
            name={"あああああああ"}
            job={"エンジニア"}
            company={"株式会社AAA"}
            area={"Minato-ku, Tokyo, japan"}
            reviewCount={16}
            statuse={"一週間前にログイン"}
            purpose={"読書、映画鑑賞、スポーツ観戦"}
            img={"/images/test.jpg"}
          />
        </SectionMessages>
      </MainContainer>
    </>
  );
};

export default User;
