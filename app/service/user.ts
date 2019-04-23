import { Service } from 'egg';
export default class UserService extends Service {
  public async add(params) {
		const { ctx } = this;
    const result = await ctx.model.User.create({
			...params,
    });
    return result;
	}
	public async find(params) {
		const { ctx } = this;
		const result = await ctx.model.User.find(params);
		return result;
	}
}
