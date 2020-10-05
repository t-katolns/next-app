import { Card } from "components/atoms/Card";
import { Skeleton } from "components/atoms/Skeleton";
import { SwitchLabel } from "components/molecules/Switch/SwitchLabel";
import { EIchange } from "domain/type";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

type Props = {
  actionName?: string;
  handleInputChange?: (e: EIchange, key: string) => void;
};

export const SkeletonPredictiveSearch: FunctionComponent<Props> = ({
  actionName,
  handleInputChange,
}) => {
  return (
    <>
      <div style={{ position: "absolute", width: "300px", zIndex: 2 }}>
        <Card height={140}>
          <Input onChange={(e) => handleInputChange(e, actionName)} />
          <div style={{ height: "20px", marginTop: "10px", marginBottom: "5px" }}>
            <Skeleton />
          </div>
          <div style={{ height: "20px", marginBottom: "5px" }}>
            <Skeleton />
          </div>
          <div style={{ height: "20px", marginBottom: "10px" }}>
            <Skeleton />
          </div>
          <SwitchLabel />
        </Card>
      </div>
    </>
  );
};
