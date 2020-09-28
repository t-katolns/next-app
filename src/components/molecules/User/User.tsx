import { Label } from "components/atoms/Label";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { GridItem } from "components/layouts/GridItem";
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
  img: string;
};

export const User: FunctionComponent<Props> = ({ name, job, company, img }) => {
  return (
    <Grid>
      <GridItem theme={{ column: "1/3", row: "1/12" }}>
        <RoundedIcon size={70} url={img} />
      </GridItem>
      <GridItem theme={{ column: "4/12", row: "1/8" }}>
        <Label weight={700} size={16} height={24}>
          {name}
        </Label>
        <Label size={12} height={18}>
          {job} / {company}
        </Label>
      </GridItem>
      <GridItem theme={{ column: "11/12", row: "1/12" }}>
        <img src="images/user/dot.svg" />
      </GridItem>
    </Grid>
  );
};
