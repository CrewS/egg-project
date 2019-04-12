import { Application } from 'egg';
const LocalStrategy = require('passport-local').Strategy;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
// const con = mongoose.connection;
// con.on('error', console.error.bind(console, '连接数据库失败'));
// con.once('open', () => {
//   console.log('连接成功');
// });

module.exports = (app: Application) => {
  const config = app.config.passportLocal;
  config.passReqToCallback = true;
  app.passport.verify(async (ctx, user) => {
    ctx.logger.debug('passport.verify', user);
    const result = await ctx.service.user.find({username: user.username, password: user.password});
    console.log('passport.verify', result);
    if (result.length > 0) {
      return result[0];
    }
    return false;
  });
  app.passport.use(
    new LocalStrategy(config, (req, username, password, done) => {
      // 把 Passport 插件返回的数据进行清洗处理，返回 User 对象
      const user = {
        provider: 'local',
        username,
        password,
      };
      // 这里不处理应用层逻辑，传给 app.passport.verify 统一处理
      console.log('doVerify', done);
      app.passport.doVerify(req, user, done);
    }),
  );
};
