import { Controller } from 'egg';

export default class ReviewController extends Controller {
	public async add() {
		const { ctx } = this;
		const result = await ctx.service.review.add();
		ctx.body = {
			info: result,
		}
	}
  public async get() {
		const { ctx } = this;
		const result = await ctx.service.review.find();
		ctx.body = {
			info: result,
		}
	}
}
