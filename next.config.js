const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = { de: "de", en: "en" };

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
