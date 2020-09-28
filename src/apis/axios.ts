import { camelizeDataKeys } from "apis/camelizeDataKeys";
import { errorHandler } from "apis/errorHandler";
import * as axios from "axios";
import apiServer from "utils/apiServer";
import { ErrorCodes } from "utils/network.utils";

const baseDomain = apiServer;
const baseURL = `${baseDomain}/apis/agents`;

export interface IAxiosErrorResponse<T = Record<string, unknown>> {
  data: T;
  status: ErrorCodes;
  statusText: string;
}

export interface IAxiosError<T = Record<string, unknown>> {
  response: IAxiosErrorResponse<T>;
}

export const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Axios.interceptors.response.use(camelizeDataKeys);
Axios.interceptors.response.use(
  (response: axios.AxiosResponse) => {
    return Promise.resolve(response.data);
  },
  (error) => errorHandler(error)
);
