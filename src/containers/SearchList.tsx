import { SearchBar } from "components/atoms/SearchBar";
import { Typography } from "components/atoms/Typography";
import { Box } from "components/layouts/Box";
import { SearchCard } from "components/molecules/Card/SearchCard";
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 1fr;
`;
const SearchLabel = styled.div<{ active?: boolean }>`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  height: 28px;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#F6F7F9" : "#FFFFFF")};
`;
type Props = {};

export const SearchList: FunctionComponent<Props> = ({ aaa }) => {
  const [state, setState] = useState("");
  return (
    <>
      <Grid>
        <Typography weight={500} size={14} height={14}>
          検索条件
        </Typography>
        <img src="/images/search/save.svg" className="item" />
        <img src="/images/search/close.svg" className="item" />
      </Grid>
      <Box mt={16} />
      <SearchBar placeholderText={"検索"}></SearchBar>
      <Box mt={20}></Box>
      <div style={{ position: "relative" }}>
        <Typography weight={700} color={"#A3AFBF"}>
          所属・経歴
        </Typography>
        <Box mt={10}></Box>
        <SearchLabel
          active={state === "company"}
          onClick={() => setState((t) => (t === "company" ? "" : "company"))}
        >
          会社
        </SearchLabel>
        {state === "company" && <SearchCard aaa={"aaa"}></SearchCard>}
        <SearchLabel
          active={state === "work"}
          onClick={() => setState((t) => (t === "work" ? "" : "work"))}
        >
          職種
        </SearchLabel>
        {state === "work" && <SearchCard aaa={"aaa"}></SearchCard>}
        <SearchLabel
          active={state === "business"}
          onClick={() => setState((t) => (t === "business" ? "" : "business"))}
        >
          業界
        </SearchLabel>
        {state === "business" && <SearchCard aaa={"aaa"}></SearchCard>}
        <SearchLabel
          active={state === "school"}
          onClick={() => setState((t) => (t === "school" ? "" : "school"))}
        >
          学校名
        </SearchLabel>
        {state === "school" && <SearchCard aaa={"aaa"}></SearchCard>}
        <Box mt={20}></Box>
        <Typography weight={700} color={"#A3AFBF"}>
          プロフィール
        </Typography>
        <Box mt={10}></Box>
        <SearchLabel
          active={state === "introduction"}
          onClick={() =>
            setState((t) => (t === "introduction" ? "" : "introduction"))
          }
        >
          自己紹介
        </SearchLabel>
        {state === "introduction" && <SearchCard aaa={"aaa"}></SearchCard>}
        <SearchLabel
          active={state === "area"}
          onClick={() => setState((t) => (t === "area" ? "" : "area"))}
        >
          エリア
        </SearchLabel>
        {state === "area" && <SearchCard aaa={"aaa"}></SearchCard>}
        <SearchLabel
          active={state === "skill"}
          onClick={() => setState((t) => (t === "skill" ? "" : "skill"))}
        >
          スキル
        </SearchLabel>
        {state === "skill" && <SearchCard aaa={"aaa"}></SearchCard>}
        <SearchLabel
          active={state === "language"}
          onClick={() => setState((t) => (t === "language" ? "" : "language"))}
        >
          語学スキル
        </SearchLabel>
      </div>
    </>
  );
};
