import { Controller } from 'egg';

export default class UserController extends Controller {
  public async get() {
		const { ctx } = this;
		ctx.body = {
			info: 'success',
		}
	}
}
