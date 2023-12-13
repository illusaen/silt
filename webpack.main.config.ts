import type { Configuration } from 'webpack';
import { DefinePlugin } from 'webpack';

import { rules } from './webpack.rules';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/app/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  plugins: [
    new DefinePlugin({
      UTILITY_PROCESS_MODULE_PATH: JSON.stringify( './dist/utility-process.js' ),
    }),
  ],
};
