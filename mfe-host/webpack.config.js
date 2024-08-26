const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    "mfe1-angular": "mfe1-angular@http://localhost:4201/remoteEntry.js",
    "mfe2-angular13": "mfe2-angular13@http://localhost:4202/remoteEntry.js",
    "mfe3-react": "mfe3-react@http://localhost:4203/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    react: { singleton: true, strictVersion: true },
    "react-dom": { singleton: true, strictVersion: true },
  },
});
