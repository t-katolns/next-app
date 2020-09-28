import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Search = styled.div<{ isSearchCardIcon: boolean }>`
  display: flex;
  width: 100%;
  background: #e1e6ed;
  border-radius: 8px;
  input {
    width: 100%;
    height: 36px;
    border-radius: 0 8px 8px 0;
    background: transparent;
    border: none;
    outline: none;
  }
  .searchIcon {
    padding: 0 8px;
  }
  .settingsIcon {
    padding: 0 8px;
    display: ${(props) => (props.isSearchCardIcon ? 'block' : 'none')};
  }
`;

type Props = {
  placeholderText: string;
  isSearchCardIcon?: boolean;
  isSearchCardOpen?: () => void;
};

export const SearchBar: FunctionComponent<Props> = ({
  placeholderText,
  isSearchCardIcon,
  isSearchCardOpen,
}) => {
  return (
    <>
      <Search isSearchCardIcon={isSearchCardIcon}>
        <img className="searchIcon" src="/images/search/search_icon.svg" />
        <input placeholder={placeholderText} />
        <img
          className="settingsIcon"
          onClick={isSearchCardOpen}
          src="/images/search_setting.svg"
        />
      </Search>
    </>
  );
};
