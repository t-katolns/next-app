import { Button } from "components/atoms/Button";
import { initialSearch, ISearch } from "domain/search";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-around;
  height: 64px;
  box-shadow: 0px -1px 24px #e1e6ed, 0px 0px 0px -24px #e1e6ed;
`;

type Props = {
  onClick?: () => void;
  searchState: ISearch;
};

export const SearchCountDisplayButton: FunctionComponent<Props> = ({ onClick, searchState }) => {
  const disabled = JSON.stringify(searchState) != JSON.stringify(initialSearch);
  return (
    <Div>
      <div className="count">
        <p>検索条件に合致する人数</p>
      </div>
      <Button width={217} height={48} disabled={disabled} onClick={onClick}>
        検索
      </Button>
    </Div>
  );
};
