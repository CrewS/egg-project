import { Controller } from 'egg';
import validator from 'validator';
export default class LoginController extends Controller {
  public async login() {
    const { ctx } = this;
    // console.log(ctx)
    await ctx.render('login.tpl');
  }
  public async logout() {
    const { ctx } = this;
    ctx.logout();
  }
  public async signup() {
    const { ctx } = this;
    const loginname = validator.trim(ctx.request.body.loginname || '').toLowerCase();
    const email = validator.trim(ctx.request.body.email || '').toLowerCase();
    const pass = validator.trim(ctx.request.body.pass || '');
    const rePass = validator.trim(ctx.request.body.rePass || '');
    let msg: string = '';
    console.log(loginname, email, pass, rePass);
    if ([ loginname, email, pass, rePass ].some(item => item === '')) {
      msg = '信息不完整';
    } else if (loginname.length < 5) {
      msg = '用户名至少需要5个字符。';
    } else if (!ctx.helper.validateId(loginname)) {
      msg = '用户名不合法。';
    } else if (!validator.isEmail(email)) {
      msg = '邮箱不合法。';
    } else if (pass !== rePass) {
      msg = '两次密码输入不一致。';
    }
    
    if (msg !== '') {
      ctx.status = 422;
      ctx.body = {
        info: '注册失败',
        msg,
      };
    } else {
      const hasUser = await ctx.service.user.find(loginname);
      // 查数据库是否该账号已注册
      console.log(hasUser)
      if (hasUser){
        ctx.body = {
          info: '注册失败',
          msg: '账号重复'
        }
      } else{
        const passhash = ctx.helper.bhash(pass)
        const result = await ctx.service.user.newUser({
          username: loginname,
          password: passhash,
          email: email,
        })
        ctx.body = {
          info: '注册成功',
          result,
        };
      }
      
      
    }
  }
}
