import { Controller } from 'egg';

export default class LoginController extends Controller {
  public async login() {
    const { ctx } = this;
    await ctx.render('login.tpl');
  }
  public async logout() {
    const { ctx } = this;
    ctx.logout();
  }
  
}
