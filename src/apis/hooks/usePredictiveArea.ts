import { IPredictiveNames } from "domain/predictive";
import useSWR from "swr";
import AuthService from "utils/AuthService";

const auth = new AuthService();
const lang = auth.getDefaultLang();

export const usePredictiveArea = (query: string) => {
  const path = `area/?langs=${lang}&q=${query}＆per_page=${1}`;
  const { data, error } = useSWR<IPredictiveNames>(path);
  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
};
