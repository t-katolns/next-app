import { Box } from "components/layouts/Box";
import { Flex } from "components/layouts/Flex";
import { CountLabel } from "components/molecules/Label/CountLabel";
import { Sort } from "components/molecules/Sort/Sort";
import { User } from "components/organisms/User/User";
import { IUsersList } from "domain/users_list";
import React, { FunctionComponent } from "react";

type Props = {
  usersList: IUsersList[];
};

export const UserList: FunctionComponent<Props> = ({ usersList }) => {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <CountLabel ct={"aaa"} st={"aaa"} />
        <Sort />
      </Flex>
      <Box mt={10} />
      {usersList.map((user, i) => (
        <User
          key={i}
          name={user.name}
          job={user.job}
          company={user.company}
          purpose={user.pourpose}
          careerStatuse={user.careerStatuse}
          img={user.img}
        />
      ))}
    </>
  );
};

export default UserList;
