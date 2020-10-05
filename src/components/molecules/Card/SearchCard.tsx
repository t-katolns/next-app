import { Card } from "components/atoms/Card";
import { SwitchLabel } from "components/molecules/Switch/SwitchLabel";
import { IPredictiveNames } from "domain/predictive";
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

const PredictiveName = styled.div`
  margin-top: 5px;
  padding: 0 8px;
  height: 80px;
  img {
    padding-top: 5px;
    vertical-align: text-bottom;
  }
  p {
    size: 12px;
    margin-left: 10px;
    display: inline-block;
  }
`;

type Props = {
  name: string;
  actionName: string;
  searchName: string;
  predictives?: IPredictiveNames;
  handleInputChange: (e: EIchange, key: string) => void;
};

export const SearchCard: FunctionComponent<Props> = ({
  name,
  actionName,
  searchName,
  predictives,
  handleInputChange,
}) => {
  return (
    <div style={{ position: "absolute", width: "100%", zIndex: 2 }}>
      <Card height={140}>
        <Input placeholder={name + "を入力"} onChange={(e) => handleInputChange(e, actionName)} />
        {searchName === "" ? (
          <SearchLabel>
            ‘|’ (バー) で OR検索、 ‘ ’ (半角スペース) で AND検索ができます。 例：「 (A|B)
            C」と打つと、 「A または B かつ C」に該当する人物が表示されます。
          </SearchLabel>
        ) : (
          <PredictiveName>
            {predictives.names.map((predictive, i) => (
              <div key={i}>
                <img src="images/company.svg" />
                <p>{predictive}</p>
              </div>
            ))}
          </PredictiveName>
        )}
        <SwitchLabel />
      </Card>
    </div>
  );
};
