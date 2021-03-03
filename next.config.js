const withPWA = require("next-pwa");

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});
