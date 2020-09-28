import { Axios } from "./axios";

const asyncLogin = async (email: string, password: string) => {
  const path = "/signin";
  return await Axios.post(path, {
    email: email,
    password: password,
  });
};

export default asyncLogin;
