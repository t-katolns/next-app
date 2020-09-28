import { useProfile } from "apis/hooks/useProfile";
import { SkeletonProfile } from "components/molecules/Skeleton/SkeletonProfile";
import { UserProfile } from "components/organisms/user/UserProfile";
import { EAchange } from "domain/type";
import React, { FunctionComponent } from "react";

type Props = {
  profileId: number;
  message: string;
  isTemplateCard: boolean;
  isShowPreviewCard: (e: EAchange) => void;
  isShowReviewModal: () => void;
  isShowTemplateCard: () => void;
  onClickAdpatationPreviewCard: (text: string) => void;
};
export const UserProfileComponent: FunctionComponent<Props> = ({
  profileId,
  message,
  isTemplateCard,
  isShowPreviewCard,
  isShowReviewModal,
  isShowTemplateCard,
  onClickAdpatationPreviewCard,
}) => {
  const { data, isLoading, error } = useProfile(profileId);
  if (isLoading || data === undefined) {
    return <SkeletonProfile></SkeletonProfile>;
  }
  if (error) {
    <div>aaaaaaaaa</div>;
  }
  return (
    <UserProfile
      profile={data}
      message={message}
      isTemplateCard={isTemplateCard}
      isShowPreviewCard={isShowPreviewCard}
      isShowReviewModal={isShowReviewModal}
      isShowTemplateCard={isShowTemplateCard}
      onClickAdpatationPreviewCard={onClickAdpatationPreviewCard}
    />
  );
};
