import { Card } from "components/atoms/Card";
import { MatchContainer } from "components/layouts/MatchContainer";
import { Header } from "components/organisms/Header";
import { SearchUserList } from "components/organisms/match/SearchUserList";
import Sidebar from "components/organisms/Sidebar";
import { MessageContents } from "containers/MessageContents";
import { EAchange, EIchange } from "domain/type";
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import UsersList from "user.json";
const SectionSearch = styled.section`
  overflow-y: auto;
  padding: 16px;
  border-right: 2px solid #e1e6ed;
`;

const SectionContainer = styled.section`
  position: relative;
  border-right: 2px solid #e1e6ed;
  display: grid;
  overflow: auto;
  grid-template-rows: auto 1fr;
`;

const SearchCard = styled(Card)`
  position: absolute;
  z-index: 20;
  left: 452px;
  height: calc(100vh - 56px - 16px - 20px);
`;
interface IState {
  joinCompanyName: string;
  yearly: string;
  comment: string;
  isDecisionModal: boolean;
  isSearchCard: boolean;
}

const Match: FunctionComponent = () => {
  const [state, setState] = useState<IState>({
    joinCompanyName: "",
    yearly: "",
    comment: "",
    isDecisionModal: false,
    isSearchCard: false,
  });

  const handleInputDicision = (e: EIchange | EAchange, key: string) => {
    if (key === "joinCompanyName") {
      setState({ ...state, joinCompanyName: e.target.value });
    } else if (key === "yearly") {
      setState({ ...state, yearly: e.target.value });
    } else {
      setState({ ...state, comment: e.target.value });
    }
  };
  const isDecisionModalOpen = () => {
    setState({ ...state, isDecisionModal: !state.isDecisionModal });
  };

  const isSearchCardOpen = () => {
    setState({ ...state, isSearchCard: !state.isSearchCard });
  };
  return (
    <>
      <Header pageName={"マッチング"}></Header>
      <Sidebar></Sidebar>
      <MatchContainer>
        <section className="search-candidates">
          <SearchUserList users={UsersList} isSearchCardOpen={isSearchCardOpen}></SearchUserList>
        </section>
        <section className="container">
          <MessageContents />
        </section>
      </MatchContainer>
    </>
  );
};

export default Match;
