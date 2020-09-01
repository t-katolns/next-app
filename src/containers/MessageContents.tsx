import { ProfileHeader } from "components/organisms/Profile/ProfileHeader";
import { UserHeader } from "components/organisms/User/UserHeader";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
const MessageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 450px);
  overflow: hidden;
  grid-template-rows: 1fr auto;
`;

const SectionMessage = styled.section`
  border-right: 2px solid #e1e6ed;
  overflow-y: auto;
  background: red;
`;

const SectionProfile = styled.section`
  overflow-y: auto;
  background: yellow;
`;

type Props = {
  name: string;
  job: string;
  company: string;
  area: string;
  reviewCount: number;
  statuse: string;
  purpose: string;
  img: string;
};

export const MessageContents: FunctionComponent = ({
  name,
  job,
  company,
  area,
  reviewCount,
  statuse,
  purpose,
  img,
}) => {
  return (
    <>
      <ProfileHeader />
      <MessageContainer>
        <SectionMessage></SectionMessage>
        <SectionProfile>
          <UserHeader
            name={name}
            job={job}
            company={company}
            area={area}
            reviewCount={reviewCount}
            statuse={statuse}
            purpose={purpose}
            img={img}
          />
        </SectionProfile>
      </MessageContainer>
    </>
  );
};
