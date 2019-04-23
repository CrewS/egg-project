import { Controller } from 'egg';

export default class UserController extends Controller {
  public async add() {
    const result = await this.ctx.service.user.add({});
    console.log(result);
    this.ctx.body = '123';
  }
  public async find() {
    const { ctx } = this;
    const result = await ctx.service.user.find({'_id': '5cac82ce2a90db3ec66c08dc'});
    this.ctx.body = {
      info: result,
    };
  }
  public async register(){
    const { ctx } = this;
    // console.log()
    const {username, password } = ctx.request.body;
    const result = await this.ctx.service.user.add({
      username,
      password,
    });
    console.log(result);
    this.ctx.body = {
      info: result,
    };
  }
}
