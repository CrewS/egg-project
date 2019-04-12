import { Service } from 'egg';
export default class UserService extends Service {
  public async add() {
    const { ctx } = this;
    const result = await ctx.model.User.create({
			username: 'huruqing',
			password: 'abc',
    });
    return result;
	}
	public async find(params) {
		const { ctx } = this;
		console.log(params);
		const result = await ctx.model.User.find(params);
		return result;
	}
}
