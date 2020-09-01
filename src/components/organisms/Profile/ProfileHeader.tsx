import { Label } from "components/atoms/Label";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { GridItem } from "components/layouts/GridItem";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  height: 100px;
  grid-row-gap: 7px;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: solid 1px;
`;

const LabelStyle = styled(Label)`
  grid-auto-columns: max-content;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
`;

type Props = {
  name: string;
  job: string;
  company: string;
  area: string;
  count: number;
  img: string;
};

export const ProfileHeader: FunctionComponent<Props> = ({
  name,
  job,
  company,
  area,
  count,
  img,
}) => {
  return (
    <Grid>
      <GridItem theme={{ column: "1/2", row: "1/12" }}>
        <RoundedIcon size={90} url="/images/test.jpg" />
      </GridItem>
      <GridItem theme={{ column: "2/5", row: "2/3" }}>
        <LabelStyle weight={700} size={16} height={24}>
          {name}
        </LabelStyle>
      </GridItem>
      <GridItem theme={{ column: "2/5", row: "3/4" }}>
        <LabelStyle size={12} height={18}>
          {job} / {company}
        </LabelStyle>
      </GridItem>
      <GridItem theme={{ column: "2/6", row: "4/5" }}>
        <LabelStyle size={12} height={14} color={"#525E6D"}>
          <img src="/images/user/location.svg" />
          {area}
        </LabelStyle>
      </GridItem>
      <GridItem theme={{ column: "2/6", row: "5/6" }}>
        <LabelStyle size={12} height={18} weight={500}>
          {count}
          <img src="/images/user/yamagata.svg" />
        </LabelStyle>
      </GridItem>
    </Grid>
  );
};
