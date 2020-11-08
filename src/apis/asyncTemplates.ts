import AuthService from "utils/AuthService";
import { Axios } from "./axios";
const auth = new AuthService();
const userId = auth.getUserId();

export const asyncTemplates = async (id: number, template: string) => {
  const path = `${userId}/message_templates/${id}`;
  return await Axios.post(path, {
    body: template,
  });
};
