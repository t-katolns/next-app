import { Card } from "components/atoms/Card";
import { SwitchLabel } from "components/molecules/Switch/SwitchLabel";
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
  aaa: any;
};

export const SearchCard: FunctionComponent<Props> = ({ aaa }) => {
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Card height={20}>
        <Input placeholder="職種を入力" />
        <SearchLabel>
          ‘|’ (バー) で OR検索、 ‘ ’ (半角スペース) で AND検索ができます。
          例：「 (A|B) C」と打つと、 「A または B かつ
          C」に該当する人物が表示されます。
        </SearchLabel>
        <SwitchLabel />
      </Card>
    </div>
  );
};
