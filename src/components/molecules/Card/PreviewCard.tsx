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
  z-index: 3;
  height: calc(100vh - 56px - 30px - 20px);
  width: 810px;
  background: #f6f7f9;
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
  height: calc(100% - 400px);
`;

const PreviewMessageBox = styled.div`
  white-space: pre-wrap;
  padding: 16px;
  word-wrap: break-word;
  background: #e0eefa;
  border-radius: 4px 16px 16px 16px;
  overflow-y: auto;
  max-height: 380px;
  ::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
  }
`;

type Props = {
  name: string;
  age: number;
  company: string;
  job: string;
  message: string;
  closePreviewCard: () => void;
};

export const PreviewCard: FunctionComponent<Props> = ({
  name,
  company,
  job,
  message,
  closePreviewCard,
}) => {
  return (
    <CardStyled>
      <img
        src="images/close.svg"
        style={{ display: "block", marginLeft: "auto" }}
        onClick={closePreviewCard}
      />
      <Typography size={20} height={30} align={"center"}>
        プレビュー
      </Typography>
      <BoxStyle mb={20} />
      <Typography align={"center"}>メッセージが表示される</Typography>
      <Box mb={20} />
      <UserCard width={380}>
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
        <PreviewMessageBox>{message}</PreviewMessageBox>
      </UserCard>
    </CardStyled>
  );
};
