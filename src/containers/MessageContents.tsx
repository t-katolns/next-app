import { ProfileHeader } from "components/molecules/Profile/ProfileHeader";
import { UserHeader } from "components/molecules/User/UserHeader";
import { BubbleMessage } from "containers/BubbleMessage";
import React, { FunctionComponent } from "react";
import UsersList from "user.json";
type Props = {
  roomId: number;
};
export const MessageContents: FunctionComponent<Props> = ({ roomId }) => {
  // const { messages, messageLoading } = useMessages(roomId);
  // const { profile, profileLoading } = useProfile(roomId);
  // if (messageLoading) {
  //   return <SkeletonProfile></SkeletonProfile>;
  // }
  return (
    <>
      <UserHeader name={"aaaaaaaaaaa"}></UserHeader>
      <div className="meessage-container">
        <section className="bubble-message">
          <BubbleMessage></BubbleMessage>
        </section>
        <section className="room-profile">
          <ProfileHeader
            name={UsersList[0].name}
            headline={UsersList[0].job}
            area={UsersList[0].company}
            reviewsCount={UsersList[0].id}
            purposes={UsersList[0].careerStatuse}
          />
          {/* <ProfileBody
            introduction={profile.introduction}
            interests={profile.interests}
            educations={profile.educations}
            purposes={profile.purposes}
            skills={profile.skills}
            languages={profile.languages}
          /> */}
        </section>
      </div>
    </>
  );
};
