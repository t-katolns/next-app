import { camelizeDataKeys } from "apis/camelizeDataKeys";
import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "localhost:3003/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

AxiosClient.interceptors.response.use(camelizeDataKeys);
export default AxiosClient;
