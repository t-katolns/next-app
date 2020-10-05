import { Card } from "components/atoms/Card";
import { SwitchLabel } from "components/molecules/Switch/SwitchLabel";
import { EIchange } from "domain/type";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

const SearchLabel = styled.div`
  margin-top: 10px;
  padding: 8px;
  background: #f0f2f5;
  border-radius: 2px;
  font-size: 10px;
  line-height: 15px;
  color: #525e6d;
  word-wrap: break-word;
`;

type Props = {
  name: string;
  actionName: string;
  handleInputChange: (e: EIchange, key: string) => void;
};

export const SearchCard: FunctionComponent<Props> = ({ name, actionName, handleInputChange }) => {
  return (
    <div style={{ position: "absolute", width: "100%", zIndex: 2 }}>
      <Card height={140}>
        <Input placeholder={name + "を入力"} onChange={(e) => handleInputChange(e, actionName)} />
        <SearchLabel>
          ‘|’ (バー) で OR検索、 ‘ ’ (半角スペース) で AND検索ができます。 例：「 (A|B)
        </SearchLabel>
        <SwitchLabel />
      </Card>
    </div>
  );
};
