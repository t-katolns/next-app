import { AxiosResponse } from "axios";
import humps from "humps";

// response.data を camelizeKeys するやつ
export const camelizeDataKeys = (response: AxiosResponse) => ({
  ...response,
  data: humps.camelizeKeys(response.data),
});
