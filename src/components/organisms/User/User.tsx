import { Label } from "components/atoms/Label";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { GridItem } from "components/layouts/GridItem";
import { ColorLabel } from "components/molecules/Label/ColorLabel";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Grid = styled.div`
  padding: 12px 8px;
  display: grid;
  height: 100px;
  :hover {
    background: #f6f7f9;
    border-radius: 8px;
  }
`;

type Props = {
  name: string;
  job: string;
  company: string;
  statuse: string;
  purpose: string;
  img: string;
};

export const User: FunctionComponent<Props> = ({
  name,
  job,
  company,
  statuse,
  purpose,
  img,
}) => {
  return (
    <Grid>
      <GridItem theme={{ column: "1/12", row: "1/12" }}>
        <RoundedIcon size={70} url="/images/test.jpg" />
      </GridItem>
      <GridItem theme={{ column: "8/12", row: "1/12" }}>
        <Label weight={700} size={16} height={24}>
          {name}
        </Label>
        <Label size={12} height={18}>
          {job} / {company}
        </Label>
        <ColorLabel width={180} background={"#E0EEFA"} color={"#0068B4"}>
          <img src="images/user/career_statuse.svg" />
          {statuse}
        </ColorLabel>
        <GridItem theme={{ column: "7/12", row: "11/12" }}>
          <ColorLabel width={150} background={"#F0F2F5"} color={"#525E6D"}>
            <img src="images/user/purpose.svg" />
            {purpose}
          </ColorLabel>
        </GridItem>
      </GridItem>
      <GridItem theme={{ column: "12/12", row: "1/12" }}>
        <img src="images/user/dot.svg" />
      </GridItem>
    </Grid>
  );
};
