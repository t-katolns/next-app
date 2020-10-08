import { Display } from "components/atoms/Display";
import { MessageTextField } from "components/atoms/MessageTextField";
import { Typography } from "components/atoms/Typography";
import { Flex } from "components/layouts/Flex";
import { TemplateCard } from "components/molecules/Card/TempplateCard";
import { ProfileBody } from "components/molecules/Profile/ProfileBody";
import { ProfileHeader } from "components/molecules/Profile/ProfileHeader";
import { IProfile } from "domain/profile";
import { EAchange } from "domain/type";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Point = styled.div`
  padding: 8px 16px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #e1e6ed;
  .count {
    display: inline-block;
    margin-top: 8px;
    margin-left: 5px;
  }
  .number {
    margin: 0 7px;
    display: inline-block;
    color: #0068b4;
    font-size: 24px;
  }
  .current_point {
    display: inline-block;
    padding: 2px 5px;
    width: 64px;
    height: 36px;
    background: #0068b4;
    border-radius: 4px;
    text-align: center;
    .possession_point {
      display: inline-block;
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
    }
  }
`;

type Props = {
  profile: IProfile;
  message: string;
  isTemplateCard: boolean;
  isShowPreviewCard: (e: EAchange) => void;
  isShowReviewModal: () => void;
  isShowTemplateCard: () => void;
  onClickAdpatationPreviewCard: (text: string) => void;
};

export const UserProfile: FunctionComponent<Props> = ({
  profile,
  message,
  isTemplateCard,
  isShowPreviewCard,
  isShowTemplateCard,
  isShowReviewModal,
  onClickAdpatationPreviewCard,
}) => {
  return (
    <>
      <div style={{ overflow: "auto", padding: 16 }}>
        <ProfileHeader
          name={profile.name}
          headline={profile.headlineContent.handline}
          area={profile.area}
          purpose={profile.purposes}
          img={profile.pictureUrl}
          isShowReviewModal={isShowReviewModal}
        />
        <ProfileBody
          introduction={profile.introduction}
          interests={profile.interests}
          educations={profile.educations}
          purposes={profile.purposes}
          skills={profile.skills}
          languages={profile.languages}
        />
      </div>
      <div className="message" style={{ position: "relative" }}>
        <Display enabled={isTemplateCard}>
          <TemplateCard
            isClose={isShowTemplateCard}
            isShowPreviewCard={onClickAdpatationPreviewCard}
          ></TemplateCard>
        </Display>
        <MessageTextField
          message={message}
          isShowPreviewCard={isShowPreviewCard}
          isShowTemplateCard={isShowTemplateCard}
        />
        <Point>
          <div>
            <Typography size={12} color={"#525E6D"} display={"inline-block"}>
              消費ポイント
            </Typography>
            <img className="help" src="images/help.svg" style={{ verticalAlign: "middle" }} />
          </div>
          <Flex justifyContent={"space-between"}>
            <div className="count">
              <img src="images/point.svg" />
              <p className="number">3</p>
              <Typography size={10} weight={500} color={"#525E6D"} display={"inline-block"}>
                ※スカウトを送ると、ポイントを消費します。 消費ポイントはユーザーによって異なります。
              </Typography>
            </div>
            <div className="current_point">
              <Typography size={9} weight={600} color={"#FFFFFF"}>
                所持ポイント
              </Typography>
              <img src="images/white_point.svg" />
              <p className="possession_point">100</p>
            </div>
          </Flex>
        </Point>
      </div>
    </>
  );
};
