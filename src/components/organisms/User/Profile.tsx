import { Label } from "components/atoms/Label";
import { Typography } from "components/atoms/Typography";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const LabelStyle = styled(Label)`
  display: block;
  margin-bottom: 20px;
  padding: 8px;
  width: 100%;
  background: #f6f7f9;
  word-break: break-all;
`;

const LabelA = styled(Label)`
  padding: 3px 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: #f6f7f9;
  display: inline-block;
  border-radius: 8px;
`;

type Props = {
  introduction: string;
  interests: any;
  works: string;
  education: any;
  likes: string;
  chips: string;
  languages: string;
};

export const Profile: FunctionComponent<Props> = ({
  introduction,
  interests,
  works,
  education,
  likes,
  chips,
  languages,
}) => {
  return (
    <>
      {/* <LabelStyle>{introduction}</LabelStyle>
      <Typography size={12} height={18} weight={700} color={"#6D7B8F"}>
        興味
      </Typography>
      {interests.map((interest, i) => (
        <LabelA key={i}>{interest}</LabelA>
      ))}
      <Typography size={12} height={18} weight={700} color={"#6D7B8F"}>
        職歴
      </Typography>
      <LabelStyle>{works}</LabelStyle> */}
      <Typography size={12} height={18} weight={700} color={"#008000"}>
        学歴
      </Typography>
      <LabelStyle>
        <Label weight={700}>{education.name}</Label>
        <Label>{education.department}</Label>
      </LabelStyle>
      <Typography size={12} height={18} weight={700} color={"blue"}>
        好きなこと
      </Typography>
      <LabelStyle>{likes}</LabelStyle>
      <Typography size={12} height={18} weight={700} color={"#008000"}>
        スキル
      </Typography>
      <LabelStyle>{chips}</LabelStyle>
      {/* <Typography size={12} height={18} weight={700} color={"#6D7B8F"}>
        語学スキル
      </Typography>
      <LabelStyle>{languages}</LabelStyle> */}
    </>
  );
};
