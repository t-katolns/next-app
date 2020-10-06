import { useUserList } from "apis/hooks/useUserList";
import { Box } from "components/layouts/Box";
import { Flex } from "components/layouts/Flex";
import { CountLabel } from "components/molecules/Label/CountLabel";
import { SkeletonProfile } from "components/molecules/Skeleton/SkeletonProfile";
import { Sort } from "components/molecules/Sort/Sort";
import { User } from "components/molecules/User/User";
import React, { FunctionComponent } from "react";
type Props = {
  profileId: number;
  page: number;
  onClickUser: (id: number) => void;
};
export const UserListComponent: FunctionComponent<Props> = ({ profileId, onClickUser }) => {
  const { data, error, size, setSize, isLoading, isLoadingMore } = useUserList();
  const users = data ? [].concat(...data.map((t) => t.users)) || [] : [];
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
    <>
      <Flex justifyContent={"space-between"}>
        <CountLabel ct={"aaa"} st={"aaa"} />
        <Sort />
      </Flex>
      <Box mb={10} />
      {users.map((user) => (
        <div key={user.id} onClick={() => onClickUser(user.id)}>
          <User
            name={user.name}
            job={user.headlineContent.subHeadline}
            company={user.headlineContent.handline}
            img={user.pictureUrl}
          />
        </div>
      ))}
      <button disabled={isLoadingMore} onClick={pageNate}>
        続きを表示
      </button>
    </>
  );
};
