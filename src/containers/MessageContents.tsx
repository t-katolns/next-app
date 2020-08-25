import { ProfileHeader } from "components/organisms/Profile/ProfileHeader";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
const MessageContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, 600px) 1fr;
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

export const MessageContents: FunctionComponent = ({}) => {
  return (
    <>
      <ProfileHeader />
      <MessageContainer>
        <SectionMessage></SectionMessage>
        <SectionProfile></SectionProfile>
      </MessageContainer>
    </>
  );
};
