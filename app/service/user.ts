import { Service } from 'egg';
interface params {
  username: string;
  password: string;
  email: string;
}
export default class UserService extends Service {
  public async add() {
    const { ctx } = this;
    const result = await ctx.model.User.create({
      username: 'huruqing',
      password: 'abc',
    });
    return result;
  }
  public async newUser(params: params) {
    const { ctx } = this;
    const result = await ctx.model.User.create({ ...params });
    return result;
  }
  public async find(username: string) {
    const { ctx } = this;
    const result = await ctx.model.User.findOne({ username });
    return result;
  }
  public async check(username: string, password: string) {
    const { ctx } = this;
    const result = await ctx.model.User.find({ username, password });
    return result;
  }
}
