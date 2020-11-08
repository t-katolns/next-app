import { RoundedIcon } from "components/atoms/RoundedIcon";
import { Grid } from "components/layouts/Grid";
import { GridItem } from "components/layouts/GridItem";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  padding: 12px 16px;
  height: 64px;
  border-bottom: 2px solid #e1e6ed;
  p {
    font-weight: 600px;
    font-size: 16px;
  }
`;

type Props = {
  name: string;
};

export const UserHeader: FunctionComponent<Props> = ({ name, isDecisionModalOpen }) => {
  return (
    <Div>
      <Grid>
        <GridItem theme={{ column: "1/2", row: "1/12" }}>
          <RoundedIcon size={65} />
        </GridItem>
        <GridItem theme={{ column: "2/4", row: "2/5" }}>
          <p>{name}</p>
        </GridItem>
        <GridItem theme={{ column: "11/12", row: "3/12" }}></GridItem>
      </Grid>
    </Div>
  );
};
