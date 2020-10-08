import { SearchBar } from "components/atoms/SearchBar";
import { Typography } from "components/atoms/Typography";
import { Box } from "components/layouts/Box";
import { SearchCard } from "components/molecules/Card/SearchCard";
import { ISearch } from "domain/search";
import { EIchange } from "domain/type";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 1fr;
`;
const SearchLabel = styled.div<{ active?: boolean }>`
  width: 100%;
  padding: 4px;
  font-weight: 500;
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#F6F7F9" : "#FFFFFF")};
  p {
    width: 85%;
    color: #a3afbf;
    margin-left: 10px;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 12px;
  }
`;

type Props = {
  searchState: ISearch;
  cardState: string;
  onChangeSearchWithKey: (e: EIchange, key: string) => void;
  isShowSearchCard: (name: string) => void;
};

export const SearchList: FunctionComponent<Props> = ({
  cardState,
  searchState,
  onChangeSearchWithKey,
  isShowSearchCard,
}) => {
  return (
    <>
      <div className="search">
        <Grid>
          <Typography weight={500} size={14} height={14}>
            検索条件
          </Typography>
          <img src="/images/search/save.svg" className="item" />
          <img src="/images/search/close.svg" className="item" />
        </Grid>
        <Box mb={16} />
        <SearchBar placeholderText={"検索"}></SearchBar>
        <Box mb={20}></Box>
        <div style={{ position: "relative" }}>
          <Box mb={20}></Box>
          <Typography weight={700} color={"#A3AFBF"}>
            プロフィール
          </Typography>
          <Box mb={10}></Box>
          <SearchLabel
            active={cardState === "introduction"}
            onClick={() => isShowSearchCard("introduction")}
          >
            名前
            <p>{searchState.introduction}</p>
          </SearchLabel>
          {cardState === "introduction" && (
            <SearchCard
              name={"名前"}
              actionName={"introduction"}
              handleInputChange={onChangeSearchWithKey}
            ></SearchCard>
          )}
          <SearchLabel active={cardState === "area"} onClick={() => isShowSearchCard("area")}>
            エリア
            <p>{searchState.area}</p>
          </SearchLabel>
          {cardState === "area" && (
            <SearchCard
              name={"エリア"}
              actionName={"area"}
              handleInputChange={onChangeSearchWithKey}
            ></SearchCard>
          )}
          <SearchLabel active={cardState === "skill"} onClick={() => isShowSearchCard("skill")}>
            スキル
            <p>{searchState.skill}</p>
          </SearchLabel>
          {cardState === "skill" && (
            <SearchCard
              name={"スキル"}
              actionName={"skill"}
              handleInputChange={onChangeSearchWithKey}
            ></SearchCard>
          )}
          <SearchLabel
            active={cardState === "language"}
            onClick={() => isShowSearchCard("language")}
          >
            語学
            <p>{searchState.languages}</p>
          </SearchLabel>
        </div>
        <div className="aaa" style={{ height: "1000px" }}>
          aaa
        </div>
      </div>
      <div className="button" style={{ height: "100px", background: "#f0f0f0" }}>
        <button>検索</button>
      </div>
    </>
  );
};
