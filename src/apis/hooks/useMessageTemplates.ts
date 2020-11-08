import { IMessageTemplates } from "domain/message_templates";
import useSWR from "swr";
import AuthService from "utils/AuthService";
const auth = new AuthService();
const userId = auth.getUserId();
const lang = auth.getDefaultLang();
export const useMessageTemplates = () => {
  const path = `${userId}/message_templates/?lang=${lang}`;
  const { data, error } = useSWR<IMessageTemplates>(path);
  return {
    templates: data,
    templateLoading: !error && !data,
    templateError: error,
  };
};
