import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const page = ctx.query.page;
    const result = await service.news.list(page);
    // console.log(result)
    await ctx.render('home.tpl', {list: result});
    // ctx.body = await ctx.service.test.sayHi('egg');
  }
}
