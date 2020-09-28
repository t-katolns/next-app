import { Box } from "components/layouts/Box";
import { Flex } from "components/layouts/Flex";
import { CountLabel } from "components/molecules/Label/CountLabel";
import { Sort } from "components/molecules/Sort/Sort";
import { User } from "components/molecules/User/User";
import { IProfile } from "domain/profile";
import React, { FunctionComponent } from "react";

type Props = {
  users: IProfile[];
  onClickUser: (id: number) => void;
  usersPageNation: () => void;
};

export const UserList: FunctionComponent<Props> = ({
  users,
  onClickUser,
  usersPageNation,
}) => {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <CountLabel ct={"aaa"} st={"aaa"} />
        <Sort />
      </Flex>
      <Box mb={10} />
      {users.map((user, i) => (
        <div key={i} onClick={() => onClickUser(user.id)}>
          <User
            key={i}
            name={user.name}
            job={user.headlineContent.subHeadline}
            company={user.headlineContent.handline}
            img={user.pictureUrl}
          />
        </div>
      ))}
      <button onClick={usersPageNation}>続きを表示</button>
    </>
  );
};