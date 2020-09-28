import { Label } from "components/atoms/Label";
import { Typography } from "components/atoms/Typography";
import { Education } from "components/organisms/Profile/Education";
import { Language } from "components/organisms/Profile/Language";
import { Round } from "components/organisms/Profile/Round";
import { Educations, Interest, Languages, Purposes } from "domain/profile";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Skills } from "../../../domain/profile";

const TypographyStyled = styled(Typography)`
  margin-top: 30px;
`;
const LabelStyle = styled(Label)`
  display: block;
  margin-top: 15px;
  padding: 8px;
  background: #f6f7f9;
  word-break: break-all;
`;

const RoundLabel = styled(Round)`
  margin-top: 10px;
`;

type Props = {
  introduction: string;
  interests: Interest[];
  educations: Educations[];
  chips: Purposes[];
  skil: Skills[];
  languages: Languages[];
};

export const ProfileBody: FunctionComponent<Props> = ({
  introduction,
  interests,
  educations,
  chips,
  skil,
  languages,
}) => {
  return (
    <>
      <LabelStyle>{introduction}</LabelStyle>
      <TypographyStyled size={12} height={18} weight={700} color={"#6D7B8F"}>
        興味関心
      </TypographyStyled>
      {interests.map((interest, i) => (
        <RoundLabel key={i}>{interest.name}</RoundLabel>
      ))}
      <TypographyStyled size={12} height={18} weight={700} color={"#6D7B8F"}>
        学歴
      </TypographyStyled>
      {educations.map((education, i) => (
        <LabelStyle key={i}>
          <Education
            name={education.name}
            department={education.department}
            endYear={education.endYear}
          ></Education>
        </LabelStyle>
      ))}
      <RoundLabel>{chips} </RoundLabel>
      <TypographyStyled size={12} height={18} weight={700} color={"#6D7B8F"}>
        スキル
      </TypographyStyled>
      <RoundLabel>{skil}</RoundLabel>
      <TypographyStyled size={12} height={18} weight={700} color={"#6D7B8F"}>
        語学スキル
      </TypographyStyled>
      {languages.map((language, i) => (
        <LabelStyle key={i}>
          <Language
            name={language.language.name}
            level={language.level.name}
          ></Language>
        </LabelStyle>
      ))}
    </>
  );
};
