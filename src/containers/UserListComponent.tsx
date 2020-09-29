import { useUserList } from "apis/hooks/useUserList";
import { SkeletonProfile } from "components/molecules/Skeleton/SkeletonProfile";
import { UserList } from "components/organisms/user/UserList";
import React, { FunctionComponent, useState } from "react";
type Props = {
  profileId: number;
  page: number;
  onClickUser: (id: number) => void;
  usersPageNation: () => void;
};
export const UserListComponent: FunctionComponent<Props> = ({
  profileId,
  page,
  onClickUser,
  usersPageNation,
}) => {
  const [userList, setUserList] = useState([]);
  const { data, isLoading, error } = useUserList(page);
  if (isLoading || data === undefined) {
    return <SkeletonProfile></SkeletonProfile>;
  }
  if (error) {
    <div>aaaaaaaaa</div>;
  }
  if (profileId === 0) {
    setUserList(data.users);
    onClickUser(data.users[0].id);
  } else {
    console.log("aaaaaaaaaaaaaa");
    setUserList(data.users);
  }
  return (
    <UserList
      users={userList}
      onClickUser={onClickUser}
      usersPageNation={usersPageNation}
    ></UserList>
  );
};
