import { webpack, Configuration as RawWebpackConfiguration } from 'webpack';
import { PluginBase } from '@electron-forge/plugin-base';
import { ForgeHookMap } from '@electron-forge/shared-types';

export class UtilityProcessPlugin extends PluginBase<RawWebpackConfiguration> {
  name = "utility-process";

  getHooks(): ForgeHookMap {
    return {
      generateAssets: this.generateAssets.bind(this),
    };
  }

  private async generateAssets(): Promise<void> {
    return new Promise((resolve, reject) => {
      webpack(this.config, (err, stats) => {
        if (err) {
          reject(err);
          return;
        }
        if (stats?.hasErrors()) {
          const json = stats.toJson();
          for (const error of json.errors ?? []) {
            reject(new Error(`${error.message}\n${error.stack}`));
            return;
          }
        }
        resolve();
      });
    });
  }
}