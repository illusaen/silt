import { Configuration } from 'webpack';

import { rules } from "./webpack.rules";

export const utilityConfig: Configuration = {
  entry: "./src/graphql/server.ts", // Change to your own entry point
  target: "node",
  module: {
    rules,
  },
  output: {
    filename: "utility-process.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
  // TODO: find a way to infer this based on whether we run electron-forge start
  // or package.
  mode: "development",
};