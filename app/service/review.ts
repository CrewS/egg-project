import { Service } from 'egg';
export default class ReviewService extends Service {
  public async add() {
		const { ctx } = this;
		const { data } = ctx.request.body;
    const result = await ctx.model.Review.create({
			data,
			time: new Date(),
    });
    return result;
	}
	public async find() {
		const { ctx } = this;
		const { id } = ctx.query;
		const result = await ctx.model.Review.findOne({_id: id,});
		return result;
	}
}
