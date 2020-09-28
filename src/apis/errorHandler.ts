export const errorHandler = (error) => {
  const status = error.response ? error.response.status : null;
  if (status === 401) {
    // refiresh or logout
    return Promise.reject(error.response.data);
  } else if (status !== null) {
    return Promise.reject(error.response.data);
  } else {
    return Promise.reject({ error: error.message });
  }
};
