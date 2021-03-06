import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};

export default plugin;
