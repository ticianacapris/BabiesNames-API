module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
          "@usecase": "./src/usecase",
          "@repository": "./src/repository",
          "@handler": "./src/delivery/api/handler",
          "@entity": "./src/domain/entity",
          "@driver": "./src/driver",
        },
      },
    ],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties"],
  ],
};
