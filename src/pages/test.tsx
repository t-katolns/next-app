import { useUserList } from "apis/hooks/useUserList";
import { SkeletonUserList } from "components/molecules/Skeleton/SkeletonUserList";
import React, { FunctionComponent } from "react";
const Test: FunctionComponent = () => {
  const { data, error, size, setSize, isLoading } = useUserList();
  const userList = data ? [].concat(...data.map((t) => t.users)) || [] : [];
  const pageNate = () => {
    setSize(size + 1);
  };
  if (isLoading || data === undefined) {
    return <SkeletonUserList />;
  }
  if (error) {
    <div>aaaaaaaaa</div>;
  }
  return (
    <>
      {userList.map((user) => (
        <div key={user.id}>
          <div className="sss" style={{ height: "100px" }}>
            {user.headlineContent.subHeadline}
          </div>
        </div>
      ))}
      <button onClick={pageNate}>続きを表示</button>
    </>
  );
};
export default Test;
