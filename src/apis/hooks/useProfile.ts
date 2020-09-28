import { IProfile } from "domain/profile";
import useSWR from "swr";
import AuthService from "utils/AuthService";

const auth = new AuthService();
const userId = auth.getUserId();
const lang = auth.getDefaultLang();

export const useProfile = (id: number) => {
  const path = `${userId}/lists/${id}?lang=${lang}`;
  const { data, error } = useSWR<IProfile>(path);
  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
};
