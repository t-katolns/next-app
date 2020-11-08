import { SearchBar } from "components/atoms/SearchBar";
import { User } from "components/molecules/User/User";
import { IUsersList } from "domain/users_list";
import React, { FunctionComponent } from "react";

type Props = {
  users: IUsersList[];
  isSearchCardOpen: () => void;
};

export const SearchUserList: FunctionComponent<Props> = ({ users, isSearchCardOpen }) => {
  return (
    <>
      <SearchBar
        placeholderText={"検索"}
        isSearchCardIcon={true}
        isSearchCardOpen={isSearchCardOpen}
      ></SearchBar>
      {users.map((user, i) => (
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
