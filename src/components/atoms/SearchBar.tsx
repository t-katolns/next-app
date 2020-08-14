import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Search = styled.div`
  display: flex;
  input {
    width: 100%;
    height: 36px;
    background: #e1e6ed;
    border-radius: 0 8px 8px 0;
    border: none;
    outline: none;
  }
  img {
    padding: 0 8px;
    border-radius: 8px 0 0 8px;
    background: #e1e6ed;
  }
`;

type Props = {
  placeholderText: string;
};

export const SearchBar: FunctionComponent<Props> = ({ placeholderText }) => {
  return (
    <>
      <Search>
        {/* <img src={searchIcon} /> */}
        <img src="/images/search/search_icon.svg" />
        <input placeholder={placeholderText} />
      </Search>
    </>
  );
};
