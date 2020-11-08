import { Label } from "components/atoms/Label";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { GridItem } from "components/layouts/GridItem";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  height: 172px;
  grid-row-gap: 7px;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const MediaGridItem = styled(GridItem)`
  @media screen and (min-width: 450px) {
    color: red;
    grid-auto-flow: row;
  }
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
  headline: string;
  area: any;
  reviewsCount: number;
  purpose?: any;
};

export const ProfileHeader: FunctionComponent<Props> = ({
  name,
  headline,
  area,
  reviewsCount,
  img,
}) => {
  return (
    <Grid>
      <GridItem theme={{ column: "1/2", row: "1/12" }}>
        <RoundedIcon size={90} />
      </GridItem>
      <GridItem theme={{ column: "2/5", row: "2/3" }}>
        <LabelStyle weight={700} size={16} height={24}>
          {name}
        </LabelStyle>
      </GridItem>
      <GridItem theme={{ column: "2/5", row: "3/4" }}>
        <LabelStyle size={12} height={18}>
          {headline}
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
          {reviewsCount}
          <img src="/images/user/yamagata.svg" />
        </LabelStyle>
      </GridItem>
      <MediaGridItem theme={{ column: "9/10", row: "7/9" }}>
        <img src="images/user/question.svg" />
      </MediaGridItem>
    </Grid>
  );
};
