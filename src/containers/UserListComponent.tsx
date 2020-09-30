import { useUserList } from "apis/hooks/useUserList";
import { SkeletonProfile } from "components/molecules/Skeleton/SkeletonProfile";
import { UserList } from "components/organisms/user/UserList";
import React, { FunctionComponent } from "react";
type Props = {
  profileId: number;
  page: number;
  onClickUser: (id: number) => void;
};
export const UserListComponent: FunctionComponent<Props> = ({
  profileId,
  page,
  onClickUser,
}) => {
  const {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating,
    isLoading,
  } = useUserList(page);
  const userList = data[0].users ? [].concat(...data[0].users) : [];
  const pageNate = () => {
    setSize(size + 1);
  };
  if (isLoading || data === undefined) {
    return <SkeletonProfile></SkeletonProfile>;
  }
  if (error) {
    <div>aaaaaaaaa</div>;
  }
  if (profileId === 0) {
    onClickUser(data[0].users[0].id);
  }

  return (
    <UserList
      users={userList}
      onClickUser={onClickUser}
      pageNate={pageNate}
    ></UserList>
  );
};
