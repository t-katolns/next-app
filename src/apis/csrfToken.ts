import { AxiosRequestConfig } from "axios";

export const csrfToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const csrfTokenMeta: HTMLMetaElement | null = document.querySelector(
    'meta[name="csrf-token"]'
  );
  if (csrfTokenMeta !== null) {
    return {
      ...config,
      headers: Object.assign({}, config.headers, {
        "X-CSRF-Token": csrfTokenMeta.content,
      }),
    };
  }
  return config;
};
