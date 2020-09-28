import { IProfile } from "domain/profile";

export type IUsers = {
  page: number;
  totalCount: number;
  users: IProfile[];
};
