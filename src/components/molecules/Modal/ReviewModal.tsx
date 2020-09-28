import { Modal } from "components/atoms/Modal";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { Typography } from "components/atoms/Typography";
import { Box } from "components/layouts/Box";
import { Flex } from "components/layouts/Flex";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const FlexStyled = styled(Flex)`
  div {
    margin-left: 20px;
    .name {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

const Border = styled.div`
  margin: 27px 0;
  background: #e1e6ed;
  height: 2px;
`;

const Feauture = styled.div`
  .label {
    width: 60px;
    text-align: center;
    padding: 0 17px;
  }
  .count {
    display: inline-block;
    color: #a3afbf;
  }
  .main {
    padding-left: 10px;
  }
`;

const CommentBox = styled.div`
  .time {
    font-size: 10px;
    color: #a3afbf;
    text-align: right;
  }
`;

type Props = {
  name: string;
  reviewCount: number;
  featureCount: number;
  text: string;
  isModal: () => void;
};
export const ReviewModal: FunctionComponent<Props> = ({
  name,
  reviewCount,
  featureCount,
  text,
  isModal,
}) => {
  return (
    <Modal width={460} height={560} radius={12} padding={14} overflowY={"auto"}>
      <FlexStyled>
        <RoundedIcon size={40}></RoundedIcon>
        <div>
          <p className="name">{name}</p>
          <p>レビュー</p>
        </div>
        <img
          src="images/close.svg"
          style={{ marginLeft: "auto" }}
          onClick={isModal}
        />
      </FlexStyled>
      <Box mb={24} />
      <div style={{ padding: "12px" }}>
        <Typography size={14} weight={500}>
          会って良かった
        </Typography>
        <Box mb={10} />
        <Flex>
          <img style={{ marginLeft: "20px" }} src="images/star.svg" />
          <div>{reviewCount}</div>
          <p
            className="reviewCountText"
            style={{ marginLeft: "20px", paddingTop: "3px" }}
          >
            {reviewCount}人のユーザーが「会って良かった」と言っています。
          </p>
        </Flex>
        <Border></Border>
        <Feauture>
          <Typography size={14} weight={500} display={"inline-block"}>
            会った人が感じた特徴
          </Typography>
          <div className="count main">({featureCount})</div>
          <Box mb={10} />
          <Flex>
            <div className="label">
              <img src="images/communication.svg" />
              <p>コミュニケーション力</p>
              <div className="count">({featureCount})</div>
            </div>
          </Flex>
        </Feauture>
        <Border></Border>
        <Typography>会った人からのコメント</Typography>
        <Box mb={10} />
        <CommentBox>
          <FlexStyled>
            <RoundedIcon size={40}></RoundedIcon>
            <div>
              <p className="name">{name}</p>
              <p></p>
            </div>
          </FlexStyled>
          <Box mb={10} />
          <p className="text">{text}</p>
          <Box mb={10} />
          <p className="time">2012/1/1</p>
        </CommentBox>
      </div>
    </Modal>
  );
};
