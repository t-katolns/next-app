const path = require("path");
module.exports = {
  env: {
    API_BASE_URL: "localhost:3003/api",
  },
  cssModules: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
