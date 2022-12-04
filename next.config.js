const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  typescript: {
    ignoreBuildErrors: true,
  },
});

module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }