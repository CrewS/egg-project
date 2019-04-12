import { Controller } from 'egg';

export default class UserController extends Controller {
  public async add() {
    const result = await this.ctx.service.user.add();
    console.log(result);
    this.ctx.body = '123';
  }
  public async find(params) {
    const { ctx } = this;
    const result = await ctx.service.user.find(params);
    this.ctx.body = {
      info: result,
    };
  }
}
