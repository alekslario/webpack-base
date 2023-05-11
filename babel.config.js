module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];
  const plugins = [
    [
      "babel-plugin-styled-components",
      {
        displayName: true,
      },
    ],
    "@babel/plugin-transform-runtime",
  ];

  return {
    presets,
    plugins,
  };
};
