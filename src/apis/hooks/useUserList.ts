import { IUsers } from "domain/Users";
import useSWR from "swr";
import AuthService from "utils/AuthService";

const auth = new AuthService();
const userId = auth.getUserId();
const lang = auth.getDefaultLang();
const perPage = 10;

export const useUserList = (page: number) => {
  const path = `${userId}/lists/?lang=${lang}&page=${page}&per_page=${perPage}`;
  const { data, error } = useSWR<IUsers>(path);
  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
};
