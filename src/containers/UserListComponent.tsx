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
  onClickUser,
}) => {
  const {
    data,
    error,
    size,
    setSize,
    isLoading,
    isLoadingMore,
  } = useUserList();
  const userList = data ? [].concat(...data.map((t) => t.users)) || [] : [];
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
      isLoadingMore={isLoadingMore}
    ></UserList>
  );
};
