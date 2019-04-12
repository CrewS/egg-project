import { Controller } from 'egg';

export default class AdminController extends Controller {
  public async index() {
    const { ctx } = this;
    // console.log('adminnnnnnnnnn')
    if (ctx.isAuthenticated()) {
      // show user info
      // ctx.body = ctx.user;
      // console.log(ctx.req)
      await ctx.render('admin.tpl');
    } else {
      // redirect to origin url by ctx.session.returnTo
      ctx.session.returnTo = ctx.path;
      await ctx.render('login.tpl');
    }
  }
}
