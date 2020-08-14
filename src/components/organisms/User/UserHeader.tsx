import { Label } from "components/atoms/Label";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { GridItem } from "components/layouts/GridItem";
import { ColorLabel } from "components/molecules/Label/ColorLabel";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  height: 150px;
  grid-row-gap: 7px;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  reviewCount: number;
  careerStatuse: string;
  purpose: string;
  img: string;
};

export const UserHeader: FunctionComponent<Props> = ({
  name,
  job,
  company,
  area,
  reviewCount,
  careerStatuse,
  purpose,
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
          {reviewCount}
          <img src="/images/user/yamagata.svg" />
        </LabelStyle>
      </GridItem>
      <GridItem theme={{ column: "2/6", row: "7/9" }}>
        <ColorLabel background={"#008000"} color={"#0068B4"}>
          <img src="images/user/career_statuse.svg" />
          {careerStatuse}
        </ColorLabel>
      </GridItem>
      <GridItem theme={{ column: "6/9", row: "7/9" }}>
        <ColorLabel background={"#008000"} color={"#525E6D"}>
          <img src="images/user/purpose.svg" />
          {purpose}
        </ColorLabel>
      </GridItem>
      <GridItem theme={{ column: "9/10", row: "7/9" }}>
        <img src="images/user/question.svg" />
      </GridItem>
    </Grid>
  );
};
