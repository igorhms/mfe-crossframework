const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
const webpack = require("webpack");

module.exports = withModuleFederationPlugin({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    redux: { singleton: true },
    "shared-state-lib": {
      singleton: true,
    },
    'history': {
      singleton: true,
    }
    // React: "react",
  },
});
