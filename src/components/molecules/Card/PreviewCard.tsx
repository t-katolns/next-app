import { Card } from "components/atoms/Card";
import { Label } from "components/atoms/Label";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { Typography } from "components/atoms/Typography";
import { Box } from "components/layouts/Box";
import { Grid } from "components/layouts/Grid";
import { GridItem } from "components/layouts/GridItem";
import { FunctionComponent } from "react";
import styled from "styled-components";
const CardStyled = styled(Card)`
  margin: 8px;
  position: absolute;
  z-index: 2;
  height: calc(100vh - 56px - 16px - 20px);
  width: 748px;
  background: red;
  border: 1px solid #e1e6ed;
  border-radius: 8px;
`;

const BoxStyle = styled(Box)`
  border-bottom: solid;
  border-color: #e1e6ed;
  border-width: 2px;
`;

const UserCard = styled(Card)`
  padding: 16px;
  margin: auto;
`;

type Props = {
  name: string;
  age: number;
  company: string;
  job: string;
  message: string;
};

export const PreviewCard: FunctionComponent<Props> = ({
  name,
  age,
  company,
  job,
  message,
}) => {
  return (
    <CardStyled>
      <img src="images/close.svg" />
      <Typography size={20} height={30} align={"center"}>
        プレビュー
      </Typography>
      <BoxStyle mt={20} />
      <Typography align={"center"}>メッセージが表示されます</Typography>
      <Box mt={20} />
      <UserCard width={343} height={513}>
        <Grid height={100}>
          <GridItem theme={{ column: "1/3", row: "1/12" }}>
            <RoundedIcon url={"images/test.jpg"} size={80} />
          </GridItem>
          <GridItem theme={{ column: "5/11", row: "2/5" }}>
            <Label size={18} weight={500} height={16}>
              {name}
            </Label>
          </GridItem>
          <GridItem theme={{ column: "5/12", row: "5/8" }}>
            <Label>
              {job}/{company}
            </Label>
          </GridItem>
          <GridItem theme={{ column: "5/10", row: "8/12" }}>
            <div>zzzzzzzzzzzz</div>
          </GridItem>
          <GridItem theme={{ column: "12/12", row: "1/3" }}>
            <img src="images/user/dot.svg" />
          </GridItem>
        </Grid>
      </UserCard>
    </CardStyled>
  );
};
