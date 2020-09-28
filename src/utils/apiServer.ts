const apiServer = (() => {
  if (process.env.Server) return process.env.Server;
  return "localhost:3003/api";
})();

export default apiServer;
