import { Controller } from 'egg';

export default class ReivewController extends Controller {
  public async review() {
    const { ctx } = this;
    await ctx.render('review.tpl');
  } 
}
