// ログインチェック
import { Display } from "components/atoms/Display";
import { MainContainer } from "components/layouts/MainContainer";
import { PreviewCard } from "components/molecules/Card/PreviewCard";
import { ReviewModal } from "components/molecules/Modal/ReviewModal";
import { Header } from "components/organisms/Header";
import Sidebar from "components/organisms/Sidebar";
import { SearchList } from "components/organisms/User/SearchList";
import { UserListComponent } from "containers/UserListComponent";
import { UserProfileComponent } from "containers/UserProfileComponent";
import { initialSearch, ISearch } from "domain/search";
import { EAchange, EIchange } from "domain/type";
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
const SectionSearch = styled.section`
  position: relative;
  z-index: 2px;
  overflow-y: auto;
  border-right: 2px solid #e1e6ed;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const SectionUsers = styled.section`
  position: relative;
  padding: 24px 10px;
  overflow-y: auto;
  border-right: 2px solid #e1e6ed;
  ::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
  }
`;

const SectionMessages = styled.section`
  padding: 24px;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 1fr auto;
`;

interface IState {
  profileId: number;
  page: number;
  cardState: string;
  previewCardState: boolean;
  message: string;
  searchState: ISearch;
  reviewModal: boolean;
  isTemplateCard: boolean;
}

const User: FunctionComponent = () => {
  const [state, setState] = useState<IState>({
    searchState: initialSearch,
    profileId: 0,
    page: 1,
    cardState: "",
    previewCardState: false,
    message: "",
    reviewModal: false,
    isTemplateCard: false,
  });

  // seachList
  const onChangeSearchWithKey = (e: EIchange, key: string) => {
    setState({ ...state, ...{ searchState: { [key]: e.target.value } } });
  };

  // profile
  const onClickUser = (id: number) => {
    setState({ ...state, profileId: id });
  };

  const isShowSearchCard = (name: string) => {
    if (state.cardState === "") {
      setState({ ...state, cardState: name });
    } else {
      setState({ ...state, cardState: "" });
    }
  };

  const isShowPreviewCard = (e: EAchange) => {
    if (e.target.value === "") {
      setState({ ...state, message: e.target.value, previewCardState: false });
    } else {
      setState({ ...state, message: e.target.value, previewCardState: true });
    }
  };

  const closePreviewCard = () => {
    setState({ ...state, previewCardState: false });
  };
  const isShowTemplateCard = () => {
    setState({ ...state, isTemplateCard: !state.isTemplateCard });
  };
  const isShowReviewModal = () => {
    setState({ ...state, reviewModal: !state.reviewModal });
  };

  const onClickAdpatationPreviewCard = (template: string) => {
    setState({ ...state, message: template, previewCardState: true });
  };

  const text = "こんにちは";

  return (
    <>
      <Header pageName="検索"></Header>
      <Sidebar />
      <MainContainer>
        <Display enabled={state.reviewModal}>
          <ReviewModal
            name={`吉澤 孝信`}
            reviewCount={16}
            text={text}
            isModal={isShowReviewModal}
          />
        </Display>
        <Display enabled={state.previewCardState}>
          <PreviewCard
            name={"Yuto Takashima"}
            age={25}
            company={"株式会社AAA"}
            job={"エンジニア"}
            message={state.message}
            closePreviewCard={closePreviewCard}
          />
        </Display>
        <SectionSearch>
          <SearchList
            cardState={state.cardState}
            isShowSearchCard={isShowSearchCard}
            searchState={state.searchState}
            onChangeSearchWithKey={onChangeSearchWithKey}
          ></SearchList>
        </SectionSearch>
        <SectionUsers>
          <UserListComponent
            profileId={state.profileId}
            page={state.page}
            onClickUser={onClickUser}
          />
        </SectionUsers>
        <SectionMessages>
          <UserProfileComponent
            profileId={state.profileId}
            message={state.message}
            isTemplateCard={state.isTemplateCard}
            isShowPreviewCard={isShowPreviewCard}
            isShowReviewModal={isShowReviewModal}
            isShowTemplateCard={isShowTemplateCard}
            onClickAdpatationPreviewCard={onClickAdpatationPreviewCard}
          />
        </SectionMessages>
      </MainContainer>
    </>
  );
};

export default User;
